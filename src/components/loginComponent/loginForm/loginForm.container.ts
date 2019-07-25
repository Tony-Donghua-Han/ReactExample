import { connect } from "react-redux";
import { Dispatch } from "redux";
// import { RootState } from "../../../redux/rootReducer";

import LoginForm, { LoginFormProps, LoginFormValues } from "./loginForm.component";
import { USER_LOADED_ACTION } from "../../../redux/Auth/auth.action";

// interface LogininBoxExtParams { }

// interface LogininBoxStateProps { }

interface LogininBoxDispatchProps {
    onSubmit(values: LoginFormValues): void;
}

function mapStateToProps(): {} {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): LogininBoxDispatchProps {
    return {
        onSubmit: (_values): void => {
            dispatch(USER_LOADED_ACTION);
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
