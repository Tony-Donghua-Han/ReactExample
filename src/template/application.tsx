import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import LoginBox from "../components/loginComponent/loginBox";

import "./application.sass";

// interface ApplicationProps {}

export default function Application(): JSX.Element {
    return (
        <div className="application" id="application">
            <div className="page-layout-wrapper">
                <Header />
                <div className="loginBoxWrapper">
                    <LoginBox />
                </div>
                <Footer />
            </div>
        </div>
    );
}
