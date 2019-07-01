import React from "react";
import { shallow } from "enzyme";
import GoogleSigninButton from "../googleSignInButton";

describe("Google Signin Button tests:", (): void => {
    test("Button should render without crushing", (): void => {
        const wrapper = shallow(<GoogleSigninButton onClick={(): void => {}} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test("Button should have 'Sign in with Google' displayed as text", (): void => {
        const wrapper = shallow(<GoogleSigninButton onClick={(): void => {}} />);
        expect(wrapper.find(".google-btn-text").text()).toEqual("Sign in with Google");
    });

    test("Clicking on the button would trigger the onClick event", (): void => {
        const mockOnClickHandler = jest.fn();
        const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} />);
        wrapper.find(".google-signin").simulate("click");
        expect(mockOnClickHandler.mock.calls.length).toBe(1);
    });

    test("Press Enter key when button is focused should trigger the onClick event", (): void => {
        const mockOnClickHandler = jest.fn();
        const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} />);
        wrapper.find(".google-signin").simulate("keydown", { keyCode: 13 });
        expect(mockOnClickHandler.mock.calls.length).toBe(1);
    });

    test("Press Space key (or any other key) when button is focused should not trigger the onClick event", (): void => {
        const mockOnClickHandler = jest.fn();
        const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} />);
        wrapper.find(".google-signin").simulate("keydown", { keyCode: 32 });
        expect(mockOnClickHandler.mock.calls.length).toBe(0);
    });
});
