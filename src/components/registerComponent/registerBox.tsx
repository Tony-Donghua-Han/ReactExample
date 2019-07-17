import React from "react";
import "./registerBox.sass";
import RegistrationForm from "./registrationForm/registrationForm";

// interface RegisterBoxProp {}

export default function RegisterBox(): JSX.Element {
    return (
        <div className="registerBox" id="registerBox">
            <div className="title">Create an account</div>
            <div className="divider" />
            <div className="form">
                <RegistrationForm onSubmit={(): void => {}} />
            </div>
            <div className="titleWithLine">or</div>
            <div className="footer">
                <div>Already on Financhy?</div>
                <div className="link">Login In</div>
            </div>
        </div>
    );
}
