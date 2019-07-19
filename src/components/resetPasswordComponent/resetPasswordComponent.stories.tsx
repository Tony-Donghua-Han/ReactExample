import React from "react";
import { storiesOf } from "@storybook/react";
import ResetPasswordComponent from "./resetPasswordComponent";

const stories = storiesOf("ResetPassword Box", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <ResetPasswordComponent />;
    },
);
