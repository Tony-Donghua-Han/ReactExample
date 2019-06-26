import React from "react";
import { storiesOf } from "@storybook/react";
import Content from "../content";

storiesOf("Content", module).add(
    "default",
    (): JSX.Element => {
        return <Content />;
    },
);
