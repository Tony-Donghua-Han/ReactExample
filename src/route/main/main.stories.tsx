import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Main from "./main.component";
import { RootState } from "../../redux/rootReducer";
import { Provider } from "react-redux";
import { AuthStatus } from "../../redux/Auth/auth.reducer";

const store = {
    getState: (): RootState => {
        return {
            auth: {
                userState: AuthStatus.noUser,
                name: "Test User",
            },
        };
    },
    subscribe: (): void => null,
    // ignore type checking here to make action-addon work
    // we are replacing the default functionality of dispatch
    // @ts-ignore
    dispatch: action("Dispatch action"),
};

const stories = storiesOf("Main", module);
// @ts-ignore ignore type check as we don't provide all properties for store
stories.addDecorator((story): JSX.Element => <Provider store={store}>{story()}</Provider>);
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
