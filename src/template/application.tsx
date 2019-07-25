import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "../route/main/main.container";

import "./application.sass";

// interface ApplicationProps {}

export default function Application(): JSX.Element {
    return (
        <div className="application" id="application">
            <div className="page-layout-wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
}
