import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GoogleSigninButton from "../googleSignInButton";

const stories = storiesOf("Google Signin Button", module);
stories.add(
    "default",
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
