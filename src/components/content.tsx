import React from "react";
import "./content.sass";

export default function Content(): JSX.Element {
    return (
        <div id="content" className="content">
            <div className="absolute-centered box-with-padding">
                <div>Content of body</div>
            </div>
        </div>
    );
}
