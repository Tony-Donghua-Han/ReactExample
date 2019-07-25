import React from "react";
import { shallow } from "enzyme";
import Main from "./main.component";

import { AuthStatus } from "../../redux/Auth/auth.reducer";

describe("Main", (): void => {
    test("noUser state should render without crushing", (): void => {
        const wrapper = shallow(<Main status={AuthStatus.noUser} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test("authenticatingUser state should render without crushing", (): void => {
        const wrapper = shallow(<Main status={AuthStatus.authenticatingUser} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test("userAuthenticated state should render without crushing", (): void => {
        const wrapper = shallow(<Main status={AuthStatus.userAuthenticated} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
