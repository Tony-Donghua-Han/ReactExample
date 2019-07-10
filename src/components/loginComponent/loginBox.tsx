import React from "react";
import GoogleSignin from "../googleSignIn/googleSignInButton";
import "./loginBox.sass";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GoogleSigninButtonProp {}

export default function GoogleSigninButton(props: GoogleSigninButtonProp): JSX.Element {
    // eslint-disable-next-line no-console
    console.log(props);
    return (
        <div className="loginBox" id="loginBox">
            <div className="title">Login</div>
            <div className="divider" />
            <div className="signinButton">
                <GoogleSignin />
            </div>
            <div className="divider" />
            <div className="form">Login Form</div>
            <div className="loginFooter">
                <div className="forgetPassword link">Forget Password?</div>
                <div className="createAccount">
                    <div>Don&apos;t have an account?</div>
                    <div className="link">Get Started</div>
                </div>
            </div>
        </div>
    );
}
