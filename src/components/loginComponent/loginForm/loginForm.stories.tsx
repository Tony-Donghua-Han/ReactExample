import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LoginForm from "./loginForm";

const stories = storiesOf("LoginBox.Form", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <LoginForm onSubmit={action("Form Submitted")} />;
    },
);
