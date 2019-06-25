import * as React from "react";
import "./content.sass";

export default function Content(): JSX.Element {
    return (
        <div id="content" className="content">
            <div className="absolute-centered center-text">Content of body</div>
        </div>
    );
}
