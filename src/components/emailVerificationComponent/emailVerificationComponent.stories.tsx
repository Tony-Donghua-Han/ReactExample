import React from "react";
import { storiesOf } from "@storybook/react";
import EmailVerificationComponent from "./emailVerificationComponent";

const stories = storiesOf("EmailVerificationComponent", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <EmailVerificationComponent />;
    },
);
