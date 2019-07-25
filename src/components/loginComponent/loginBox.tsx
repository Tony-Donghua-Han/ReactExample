import React from "react";
import GoogleSignin from "./googleSignIn/googleSignInButton";
import LoginForm from "./loginForm/loginForm.container";
import "./loginBox.sass";

// interface LoginBoxProps {}

export default function LoginBox(): JSX.Element {
    return (
        <div className="loginBox" id="loginBox">
            <div className="title">Welcome Back</div>
            <div className="divider" />
            <div className="signinButton">
                <GoogleSignin />
            </div>
            <div className="divider" />
            <div className="form">
                <LoginForm />
            </div>
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
