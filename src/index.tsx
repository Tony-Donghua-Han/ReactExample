import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./headerAndFooter/header";
import Footer from "./headerAndFooter/footer";
import Content from "./components/content";
import "./index.sass";

ReactDOM.render(<MainComponent />, document.getElementById("mainApp"));

function MainComponent(): JSX.Element {
    return (
        <div className="page-layout-wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
