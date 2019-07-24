import React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./footer";

const stories = storiesOf("Template.Footer", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <Footer />;
    },
);
