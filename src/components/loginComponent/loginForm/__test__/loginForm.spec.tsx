import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LoginForm from "../loginForm.component";

describe("LoginForm", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<LoginForm onSubmit={(): void => {}} />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.dive().debug()).toMatchSnapshot();
    });
});
