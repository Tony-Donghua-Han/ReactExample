import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../../redux/rootReducer";

import LoginForm, { LoginFormProps, LoginFormValues } from "./loginForm.component";
import login from "../../../redux/Auth/auth.thunk";

// interface LogininBoxExtParams { }

// interface LogininBoxStateProps { }

type Dispatch = ThunkDispatch<RootState, undefined, AnyAction>;

interface LogininBoxDispatchProps {
    onSubmit(values: LoginFormValues): void;
}

function mapStateToProps(): {} {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): LogininBoxDispatchProps {
    return {
        onSubmit: ({ email, password }): void => {
            dispatch(login(email, password));
        },
    };
}

function mergeProps(_stateProps: {}, dispatchProps: LogininBoxDispatchProps): LoginFormProps {
    return {
        onSubmit: (values): void => {
            dispatchProps.onSubmit(values);
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(LoginForm);
