import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../rootReducer";
import { userLoaded } from "./auth.action";

type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

export default function login(userName: string, password: string): ThunkResult<Promise<void>> {
    return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>): Promise<void> => {
        console.log(`Entering Thunk Actions with ${userName} and ${password}`);
        dispatch(userLoaded(userName));
    };
}
