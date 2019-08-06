import React from "react";
import ProjectCard from "./ProjectCard";
import { shallowRender } from "../../utils/shallowRender";
import { project } from "../../utils/myProjects";

describe("ProjectCard", () => {
  it("renders expected structure", () => {
    const received = shallowRender(
      <ProjectCard
        title={project.title}
        description={project.description}
        toolIcons={project.toolIcons}
        img={project.img}
      />
    );
    expect(received).toMatchSnapshot();
  });
});
