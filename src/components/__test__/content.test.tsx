import React from "react";
import { shallow } from "enzyme";
import Content from "../content";

describe("Test content rendering", (): void => {
    test("Content should render without breaking", (): void => {
        const wrapper = shallow(<Content />);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
