import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ForgetPasswordComponent from "./forgetPasswordComponent";

describe("ForgetPasswordComponent", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<ForgetPasswordComponent />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
