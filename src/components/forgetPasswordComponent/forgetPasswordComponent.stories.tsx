import React from "react";
import { storiesOf } from "@storybook/react";
import ForgetPasswordComponent from "./forgetPasswordComponent";

const stories = storiesOf("ForgetPasswordComponent", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <ForgetPasswordComponent />;
    },
);
