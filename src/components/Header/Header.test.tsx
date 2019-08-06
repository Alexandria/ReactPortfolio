import React from "react";
import Header from "./Header";
import { shallowRender } from "../../utils/shallowRender";

describe("Header", () => {
  it("renders expected structure", () => {
    const received = shallowRender(<Header />);
    expect(received).toMatchSnapshot();
  });
});
