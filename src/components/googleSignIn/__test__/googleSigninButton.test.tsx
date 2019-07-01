import React from "react";
import { shallow } from "enzyme";
import GoogleSigninButton from "../googleSignInButton";

describe("Google Signin Button", (): void => {
    describe("Common -", (): void => {
        test("should have 'Sign in with Google' displayed as text", (): void => {
            const wrapper = shallow(<GoogleSigninButton onClick={(): void => {}} />);
            expect(wrapper.find(".g-btn-text").text()).toEqual("Sign in with Google");
        });
    });

    describe("Regular", (): void => {
        test("should render without crushing", (): void => {
            const wrapper = shallow(<GoogleSigninButton onClick={(): void => {}} />);
            expect(wrapper.debug()).toMatchSnapshot();
        });

        test("should trigger the onClick event when clicked", (): void => {
            const mockOnClickHandler = jest.fn();
            const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} />);
            wrapper.find(".google-signin").simulate("click");
            expect(mockOnClickHandler.mock.calls.length).toBe(1);
        });

        test("should trigger onClick event when Enter key is pressed when element is focused", (): void => {
            const mockOnClickHandler = jest.fn();
            const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} />);
            wrapper.find(".google-signin").simulate("keydown", { keyCode: 13 });
            expect(mockOnClickHandler.mock.calls.length).toBe(1);
        });

        test("should not trigger the onClick event when Space key (or other keys) are pressed", (): void => {
            const mockOnClickHandler = jest.fn();
            const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} />);
            wrapper.find(".google-signin").simulate("keydown", { keyCode: 32 });
            expect(mockOnClickHandler.mock.calls.length).toBe(0);
        });
    });

    describe("Disabled", (): void => {
        test("should render without crushing", (): void => {
            const wrapper = shallow(<GoogleSigninButton onClick={(): void => {}} disabled />);
            expect(wrapper.debug()).toMatchSnapshot();
        });

        test("should not trigger onClick event when clicked", (): void => {
            const mockOnClickHandler = jest.fn();
            const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} disabled />);
            wrapper.find(".google-signin-disabled").simulate("click");
            expect(mockOnClickHandler.mock.calls.length).toBe(0);
        });

        test("should not trigger the onClick event when Enter/Space key (or other keys) are pressed", (): void => {
            const mockOnClickHandler = jest.fn();
            const wrapper = shallow(<GoogleSigninButton onClick={mockOnClickHandler} disabled />);
            wrapper.find(".google-signin-disabled").simulate("keydown", { keyCode: 13 });
            expect(mockOnClickHandler.mock.calls.length).toBe(0);
            wrapper.find(".google-signin-disabled").simulate("keydown", { keyCode: 32 });
            expect(mockOnClickHandler.mock.calls.length).toBe(0);
        });
    });
});
