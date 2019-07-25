import React from "react";
import "./main.sass";

import { AuthStatus } from "../../redux/Auth/auth.reducer";
import LoginBox from "../../components/loginComponent/loginBox";

export interface MainComponentProps {
    status: AuthStatus;
    name?: string;
}

export default function Main({ status, name }: MainComponentProps): JSX.Element {
    switch (status) {
        case AuthStatus.noUser:
        case AuthStatus.authenticatingUser:
            return (
                <div className="main" id="main">
                    <LoginBox />
                </div>
            );
        case AuthStatus.userAuthenticated:
            return (
                <div className="main" id="main">
                    Customer name is {name}
                </div>
            );
        default:
            // Should return error
            return <div>Unhandled Rendering Case</div>;
    }
}
