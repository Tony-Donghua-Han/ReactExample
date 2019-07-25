import { combineReducers } from "redux";

import auth, { AuthState } from "./Auth/auth.reducer";

export interface RootState {
    auth: AuthState;
}

export const rootReducer = combineReducers<RootState>({
    auth,
});
