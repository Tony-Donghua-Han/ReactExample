import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Template from "./template";

describe("Template", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<Template />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
