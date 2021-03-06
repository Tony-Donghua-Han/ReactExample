import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./headerAndFooter/header";
import Footer from "./headerAndFooter/footer";
import LoginBox from "./components/loginComponent/loginBox";
import "./index.sass";

ReactDOM.render(<MainComponent />, document.getElementById("mainApp"));

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
