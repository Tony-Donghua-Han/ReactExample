import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import Login from "./loginBox";
import { RootState } from "../../redux/rootReducer";
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

const stories = storiesOf("Login Box", module);
// @ts-ignore ignore type check as we don't provide all properties for store
stories.addDecorator((story): JSX.Element => <Provider store={store}>{story()}</Provider>);
stories.add(
    "active",
    (): JSX.Element => {
        return <Login />;
    },
);
