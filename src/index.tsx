import * as React from "react";
import { render } from "react-dom";
import { createStore, Action } from "redux";
import { Provider } from "react-redux";

import App from "./template/application";

import "./index.sass";

import { RootState, rootReducer } from "./redux/rootReducer";
import { AllActions } from "./redux/allActionsEnum";

const store = createStore<RootState, Action<AllActions>, null, null>(
    rootReducer,
    // @ts-ignore
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("mainApp"),
);
