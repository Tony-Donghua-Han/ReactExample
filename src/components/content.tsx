import React from "react";
import "./content.sass";

export default function Content(): JSX.Element {
    function clickEvent(): void {
        // eslint-disable-next-line no-console
        console.log("Button Clicked");
    }

    return (
        <div id="content" className="content">
            <div className="absolute-centered box-with-padding">
                <div>Content of body</div>
                <button type="button" onClick={clickEvent}>
                    Click Me
                </button>
            </div>
        </div>
    );
}
