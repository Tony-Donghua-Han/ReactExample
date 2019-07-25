import { connect } from "react-redux";
import { AuthStatus } from "../../redux/Auth/authReducer";
import { RootState } from "../../redux/rootReducer";

import MainComponent, { MainComponentProps } from "./main.component";

// interface MainExtParams { }

interface MainStateProps {
    authStatus: AuthStatus;
}

// interface mainDispatchProps { }

function mapStateToProps(state: RootState): MainStateProps {
    return {
        authStatus: state.auth.userState,
    };
}

function mapDispatchToProps(): {} {
    return {};
}

function mergeProps(stateProps: MainStateProps): MainComponentProps {
    return {
        status: stateProps.authStatus,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(MainComponent);
