import { AllActions } from "../allActionsEnum";

interface UserLoadedAction {
    type: AllActions.userLoaded;
    name: string;
}

export const userLoaded = (name: string): UserLoadedAction => ({
    type: AllActions.userLoaded,
    name,
});

interface UserLoadingAction {
    type: AllActions.userLoading;
}

export const USER_LOADING_ACTION: UserLoadingAction = {
    type: AllActions.userLoading,
};

export type AuthActions = UserLoadedAction | UserLoadingAction;
