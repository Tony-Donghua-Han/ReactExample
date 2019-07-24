import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Footer from "./footer";

describe("Footer", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<Footer />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
