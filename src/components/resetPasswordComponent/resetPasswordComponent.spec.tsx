import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ResetPasswordComponent from "./resetPasswordComponent";

describe("ResetPasswordComponent", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<ResetPasswordComponent />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
