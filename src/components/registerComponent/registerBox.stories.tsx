import React from "react";
import { storiesOf } from "@storybook/react";
import RegisterBox from "./registerBox";

const stories = storiesOf("RegisterBox", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <RegisterBox />;
    },
);
