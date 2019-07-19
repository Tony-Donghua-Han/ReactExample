import React from "react";
import "./forgetPasswordComponent.sass";
import ForgetPasswordForm from "./forgetPasswordForm/forgetPasswordForm";

// interface ForgetPasswordComponentProps {}

export default function ForgetPasswordComponent(): JSX.Element {
    return (
        <div className="forgetPasswordComponent" id="forgetPasswordComponent">
            <div className="title">Forget Password</div>
            <div className="divider" />
            <div className="form">
                <ForgetPasswordForm onSubmit={(): void => {}} />
            </div>
        </div>
    );
}
