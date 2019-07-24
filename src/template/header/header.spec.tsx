import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Header from "./header";

describe("Header", (): void => {
    let wrapper: ShallowWrapper;
    beforeEach((): void => {
        wrapper = shallow(<Header />);
    });

    test("should render without crushing", (): void => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
