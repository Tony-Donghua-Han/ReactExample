import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LoginBox from "../loginBox";

describe("LoginForm", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<LoginBox />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
