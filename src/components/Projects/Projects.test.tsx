import React from "react";
import Projects from "./Projects";
import { shallowRender } from "../../utils/shallowRender";
import { myProjects } from "../../utils/myProjects";

describe("Projects", () => {
  it("renders expected structure", () => {
    const received = shallowRender(<Projects projects={myProjects} />);
    expect(received).toMatchSnapshot();
  });
});
