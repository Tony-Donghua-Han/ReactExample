import React from "react";
import "./resetPasswordComponent.sass";
import ResetPasswordForm from "./resetPasswordFormComponent/resetPasswordFormComponent";

// interface ResetPasswordComponentProps {}

export default function ResetPasswordComponent(): JSX.Element {
    return (
        <div className="resetPasswordComponent" id="resetPasswordComponent">
            <div className="title"> Reset Password</div>
            <div className="divider" />
            <div className="form">
                <ResetPasswordForm onSubmit={(): void => {}} />
            </div>
        </div>
    );
}
