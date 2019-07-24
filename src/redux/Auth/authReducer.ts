import { AllActions } from "../allActionsEnum";
import { AuthActions } from "./authAction";

enum AuthStatus {
    noUser = "noUser",
    authenticatingUser = "authenticatingUser",
    userAuthenticated = "userAuthenticated",
}

interface AuthState {
    userState: AuthStatus;
    name: string;
}

const initState: AuthState = {
    userState: AuthStatus.noUser,
    name: "",
};

export default function authReducer(oldState: AuthState = initState, action: AuthActions): AuthState {
    const state: AuthState = { userState: initState.userState, name: initState.name };
    Object.assign(state, oldState);

    switch (action.type) {
        case AllActions.userLoading:
            state.userState = AuthStatus.authenticatingUser;
            return state;
        case AllActions.userLoaded:
            state.userState = AuthStatus.userAuthenticated;
            state.name = "Input User Name";
            return state;
        default:
            return oldState;
    }
}
