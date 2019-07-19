import React from "react";
import { storiesOf } from "@storybook/react";
import ResetPasswordFormComponent from "./resetPasswordFormComponent";

const stories = storiesOf("ResetPassword Box.Form", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <ResetPasswordFormComponent onSubmit={(): void => {}} />;
    },
);
