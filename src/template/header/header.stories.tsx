import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./header";

const stories = storiesOf("Template.Header", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <Header />;
    },
);
