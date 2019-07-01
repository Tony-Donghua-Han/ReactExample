import React from "react";
import "./googleSigninButton.sass";

interface GoogleSigninButtonProp {
    onClick(): void;
}

export default function GoogleSigninButton({ onClick }: GoogleSigninButtonProp): JSX.Element {
    function handleEnterKey(event: React.KeyboardEvent<HTMLDivElement>): void {
        switch (event.keyCode) {
            case 13:
                onClick();
                break;
            default:
            // Not handling any other key presses
        }
    }

    return (
        <div className="google-signin" onClick={onClick} onKeyDown={handleEnterKey} role="button" tabIndex={0}>
            <div className="google-btn-icon" />
            <span className="google-btn-text">Sign in with Google</span>
        </div>
    );
}
