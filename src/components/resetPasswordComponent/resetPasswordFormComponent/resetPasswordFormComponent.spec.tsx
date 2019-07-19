import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ResetPasswordFormComponent from "./resetPasswordFormComponent";

describe("ResetPasswordFormComponent", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<ResetPasswordFormComponent onSubmit={(): void => {}} />).dive();
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
