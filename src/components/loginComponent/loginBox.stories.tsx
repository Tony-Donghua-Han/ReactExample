import React from "react";
import { storiesOf } from "@storybook/react";
import Login from "./loginBox";

const stories = storiesOf("LoginBox", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <Login />;
    },
);
