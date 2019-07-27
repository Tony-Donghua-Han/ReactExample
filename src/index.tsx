import * as React from "react";
import { render } from "react-dom";
import { createStore, Action, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./template/application";

import "./index.sass";

import { RootState, rootReducer } from "./redux/rootReducer";
import { AllActions } from "./redux/allActionsEnum";

const store = createStore<RootState, Action<AllActions>, { dispatch: unknown }, null>(
    rootReducer,
    composeWithDevTools<{ dispatch: unknown }, null>(applyMiddleware(thunk)),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("mainApp"),
);
