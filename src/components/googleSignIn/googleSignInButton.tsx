import React from "react";
import "./googleSigninButton.sass";

export default function GoogleSigninButton(): JSX.Element {
    return (
        <div className="google-signin">
            <div className="google-btn-icon" />
            <span className="google-btn-text">Sign in with Google</span>
        </div>
    );
}
