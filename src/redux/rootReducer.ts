import { combineReducers } from "redux";

import auth, { AuthState } from "./Auth/authReducer";

export interface RootState {
    auth: AuthState;
}

export const rootReducer = combineReducers<RootState>({
    auth,
});
