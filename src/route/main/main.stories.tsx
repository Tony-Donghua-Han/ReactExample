import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import Main from "./main.component";

import { AuthStatus } from "../../redux/Auth/authReducer";

const stories = storiesOf("Main", module);
stories.addDecorator(withKnobs);
stories.add(
    "default",
    (): JSX.Element => {
        const label = "Auth Status";
        const options = {
            NoUser: AuthStatus.noUser,
            Authenticating: AuthStatus.authenticatingUser,
            Authenticated: AuthStatus.userAuthenticated,
        };
        const defaultValue = AuthStatus.noUser;
        const groupId = "Auth";
        return <Main status={select(label, options, defaultValue, groupId)} />;
    },
);
