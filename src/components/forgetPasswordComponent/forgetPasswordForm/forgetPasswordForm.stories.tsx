import React from "react";
import { storiesOf } from "@storybook/react";
import ForgetPasswordForm from "./forgetPasswordForm";

const stories = storiesOf("ForgetPassword Box.Form", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <ForgetPasswordForm onSubmit={(): void => {}} />;
    },
);
