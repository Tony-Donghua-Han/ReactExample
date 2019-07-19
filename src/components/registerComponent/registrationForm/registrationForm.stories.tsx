import React from "react";
import { storiesOf } from "@storybook/react";
import RegistrationForm from "./registrationForm";

const stories = storiesOf("Register Box.Form", module);
stories.add(
    "active",
    (): JSX.Element => {
        return <RegistrationForm onSubmit={(): void => {}} />;
    },
);
