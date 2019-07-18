import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import EmailVerificationComponent from "./emailVerificationComponent";

describe("EmailVerificationComponent", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<EmailVerificationComponent />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
