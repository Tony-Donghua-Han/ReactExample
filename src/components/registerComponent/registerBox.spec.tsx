import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import RegisterBox from "./registerBox";

describe("LoginForm", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<RegisterBox />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test("should render title text Create an account", (): void => {
        expect(
            wrapper
                .find(".title")
                .first()
                .text(),
        ).toBe("Create an account");
    });

    test("should render footer with Already On Financhy? and Login In link", (): void => {
        const footer: ShallowWrapper = wrapper.find(".footer");
        expect(footer.childAt(0).text()).toBe("Already on Financhy?");
    });

    test("should render footer with Login In link", (): void => {
        const footer: ShallowWrapper = wrapper.find(".footer");
        expect(footer.find(".link").text()).toBe("Login Ins");
    });
});
