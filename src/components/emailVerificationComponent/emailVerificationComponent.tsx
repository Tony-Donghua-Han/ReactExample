import React from "react";
import "./emailVerificationComponent.sass";

// interface EmailVerificationComponentProps {}

export default function EmailVerificationComponent(): JSX.Element {
    return (
        <div className="emailVerificationComponent" id="emailVerificationComponent">
            <div className="title">Thank you</div>
            <div className="divider" />
            <div className="textGroup">
                <div className="verifiedIcon" />
                <div className="verificationText">Your email has been verified</div>
            </div>
            <div className="btnHolder">
                <button className="btn" type="button">
                    Get Started ❯
                </button>
            </div>
        </div>
    );
}
