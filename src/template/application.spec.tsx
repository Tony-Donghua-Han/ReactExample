import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Application from "./application";

describe("Application", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<Application />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
