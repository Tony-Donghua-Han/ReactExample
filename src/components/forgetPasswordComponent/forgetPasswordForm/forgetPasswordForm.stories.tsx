import React from "react";
import { storiesOf } from "@storybook/react";
import ForgetPasswordForm from "./forgetPasswordForm";

const stories = storiesOf("ForgetPasswordComponent/ForgetPasswordForm", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <ForgetPasswordForm onSubmit={(): void => {}} />;
    },
);
