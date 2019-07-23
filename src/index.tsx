import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import Header from "./headerAndFooter/header";
import Footer from "./headerAndFooter/footer";
import LoginBox from "./components/loginComponent/loginBox";
import "./index.sass";

// Action Enums
enum AuthActionTypes {
    userLoading = "userLoading",
    userLoaded = "userLoaded",
}

// Action
interface UserLoadedAction {
    type: AuthActionTypes.userLoaded;
}

const USER_LOADED_ACTION: UserLoadedAction = {
    type: AuthActionTypes.userLoaded,
};

interface UserLoadingAction {
    type: AuthActionTypes.userLoading;
}

const USER_LOADING_ACTION: UserLoadingAction = {
    type: AuthActionTypes.userLoading,
};

type AuthActions = UserLoadedAction | UserLoadingAction;

// Reduers
enum UserState {
    noUser = "noUser",
    authenticatingUser = "authenticatingUser",
    userAuthenticated = "userAuthenticated",
}

interface AuthState {
    userState: UserState;
}

const initState: AuthState = {
    userState: UserState.noUser,
};

function authReducer(state: AuthState = initState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.userLoading:
            state.userState = UserState.authenticatingUser;
            return state;
        default:
            return state;
    }
}

// Store Initialization

const store = createStore(authReducer);

store.subscribe((): void => {
    console.log(store.getState());
});

store.dispatch(USER_LOADED_ACTION);
store.dispatch(USER_LOADING_ACTION);

ReactDOM.render(<MainComponent />, document.getElementById("mainApp"));

function MainComponent(): JSX.Element {
    return (
        <div className="page-layout-wrapper">
            <Header />
            <div className="content">
                <LoginBox />
            </div>
            <Footer />
        </div>
    );
}
