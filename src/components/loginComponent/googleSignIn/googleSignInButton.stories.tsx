import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GoogleSigninButton from "./googleSignInButton";

const stories = storiesOf("LoginBox.Google Signin Button", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <GoogleSigninButton onClick={action("button-clicked")} />;
    },
);

stories.add(
    "disabled",
    (): JSX.Element => {
        return <GoogleSigninButton onClick={action("button-clicked")} disabled />;
    },
);
