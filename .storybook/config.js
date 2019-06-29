import { configure, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS, configureViewport } from "@storybook/addon-viewport";

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({ viewport: { viewports:{ ...INITIAL_VIEWPORTS }, defaultViewport: "iphonex" } })
configure(loadStories, module);

