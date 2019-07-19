import React from "react";
import { storiesOf } from "@storybook/react";
import EmailVerificationComponent from "./emailVerificationComponent";

const stories = storiesOf("EmailVerification Box", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <EmailVerificationComponent />;
    },
);
