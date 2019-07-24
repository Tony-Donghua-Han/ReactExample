import { AllActions } from "../allActionsEnum";

interface UserLoadedAction {
    type: AllActions.userLoaded;
}

export const USER_LOADED_ACTION: UserLoadedAction = {
    type: AllActions.userLoaded,
};

interface UserLoadingAction {
    type: AllActions.userLoading;
}

export const USER_LOADING_ACTION: UserLoadingAction = {
    type: AllActions.userLoading,
};

export type AuthActions = UserLoadedAction | UserLoadingAction;
