import {
    CognitoUserPool,
    ICognitoUserPoolData,
    CognitoUserSession,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails,
    IAuthenticationCallback,
} from "amazon-cognito-identity-js";

const userPoolId = "us-east-2_G1wQxUmRe";
const clientId = "6bllqao6gg5i04p8p2vgsvddhv";

export function getUserPool(): CognitoUserPool {
    const poolData: ICognitoUserPoolData = {
        UserPoolId: userPoolId,
        ClientId: clientId,
    };

    const userPool = new CognitoUserPool(poolData);
    return userPool;
}

export function getCurrentUser(): void {
    console.log("Testing authorization for website");
    const currentUser = getUserPool().getCurrentUser();

    if (currentUser != null) {
        currentUser.getSession((err: Error, session: CognitoUserSession): void => {
            if (err) {
                alert(err);
            }
            console.log(`session validity: ${session.isValid()}`);
        });
    } else {
        console.log("No user detected");
    }

    return null;
}

interface RegistrationData {
    userName: string;
    password: string;
    email: string;
}

export function registerUser({ userName, password, email }: RegistrationData): void {
    const emailAttribute = new CognitoUserAttribute({ Name: "email", Value: email });
    const attributeList = [emailAttribute];
    getUserPool().signUp(userName, password, attributeList, null, (err, result): void => {
        if (err) {
            alert(err);
            return;
        }

        const cognitoUser = result.user;
        console.log(`User Name is: ${cognitoUser.getUsername()}`);
    });
    console.log("End of registerUser function");
}

interface AuthenticationData {
    userName: string;
    password: string;
}

export function authenticateUser({ userName, password }: AuthenticationData): CognitoUser {
    const authDetail = new AuthenticationDetails({ Username: userName, Password: password });
    const pool = getUserPool();
    const user = new CognitoUser({ Username: userName, Pool: pool });
    const authCallBack: IAuthenticationCallback = {
        onFailure: (err): void => {
            console.log("Sign in failed");
            console.log(err);
        },
        onSuccess: (session): void => {
            console.log("Sign in succeed, received session:");
            console.log(session);
        },
    };
    user.authenticateUser(authDetail, authCallBack);
    return null;
}
