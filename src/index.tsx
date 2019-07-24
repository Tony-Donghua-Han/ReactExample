import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from "./headerAndFooter/header";
import Footer from "./headerAndFooter/footer";
import LoginBox from "./components/loginComponent/loginBox";

import "./index.sass";

import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById("mainApp"),
);

function MainComponent(): JSX.Element {
    return (
        <div className="page-layout-wrapper">
            <Header />
            <div className="content">
                <LoginBox />
            </div>
            <Footer />
        </div>
    );
}
