import React from "react";
import "./googleSigninButton.sass";

interface GoogleSigninButtonProp {
    onClick(): void;
    disabled?: boolean;
}

export default function GoogleSigninButton({ onClick, disabled }: GoogleSigninButtonProp): JSX.Element {
    function handleEnterKey(event: React.KeyboardEvent<HTMLDivElement>): void {
        switch (event.keyCode) {
            case 13:
                onClick();
                break;
            default:
            // Not handling any other key presses
        }
    }

    let resultElement: JSX.Element = null;
    if (!disabled) {
        resultElement = (
            <div className="google-signin" onClick={onClick} onKeyDown={handleEnterKey} role="button" tabIndex={0}>
                <div className="g-btn-icon" />
                <span className="g-btn-text">Sign in with Google</span>
            </div>
        );
    } else {
        resultElement = (
            <div className="google-signin-disabled">
                <div className="g-btn-icon" />
                <span className="g-btn-text">Sign in with Google</span>
            </div>
        );
    }
    return resultElement;
}
