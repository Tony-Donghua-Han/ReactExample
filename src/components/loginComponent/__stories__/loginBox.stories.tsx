import React from "react";
import { storiesOf } from "@storybook/react";
import Login from "../loginBox";

const stories = storiesOf("LoginBox", module);
stories.add(
    "default",
    (): JSX.Element => {
        return <Login />;
    },
);
