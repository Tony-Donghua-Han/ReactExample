import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ForgetPasswordForm from "./forgetPasswordForm";

describe("ForgetPasswordForm", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<ForgetPasswordForm onSubmit={(): void => {}} />).dive();
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
