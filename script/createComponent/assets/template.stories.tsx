import React from "react";
import { storiesOf } from "@storybook/react";
import Template from "./template";

const stories = storiesOf("Template", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <Template />;
    },
);
