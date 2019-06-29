import React from "react";
import { storiesOf } from "@storybook/react";
import Content from "../content";

const stories = storiesOf("Content", module);
stories.add(
    "default",
    (): JSX.Element => {
        return <Content />;
    },
);
