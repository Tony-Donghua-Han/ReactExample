import React from "react";
import { storiesOf } from "@storybook/react";
import GoogleSigninButton from "../googleSignInButton";

const stories = storiesOf("Google Signin Button", module);
stories.add(
    "default",
    (): JSX.Element => {
        return <GoogleSigninButton />;
    },
);
