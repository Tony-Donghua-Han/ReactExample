import React from "react";
import "./registerBox.sass";

// interface RegisterBoxProp {}

export default function RegisterBox(): JSX.Element {
    return (
        <div className="registerBox" id="registerBox">
            <div className="title">Create an account</div>
            <div className="divider" />
            <div>Registration Form</div>
            <div className="titleWithLine">or</div>
            <div className="footer">
                <div>Already on Financhy?</div>
                <div className="link">Login In</div>
            </div>
        </div>
    );
}
