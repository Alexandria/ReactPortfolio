import React from "react";
import AboutMe from "./AboutMe";
import { shallowRender } from "../../utils/shallowRender";

describe("AboutMe", () => {
  it("renders expected structure", () => {
    const received = shallowRender(<AboutMe />);
    expect(received).toMatchSnapshot();
  });
});
