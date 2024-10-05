import React from "react";
import TitleBox from "../Components/Common/TitleBox";
import ProjectCard from "../Components/Common/ProjectCard";
import { listOfProject } from "../ProjectData";

function Projects() {
  return (
    <section className="project-section container">
      <TitleBox>
        <p className="text-center section-title">Recent Projects</p>
      </TitleBox>

      <div className="project-list">
        {listOfProject.slice(0, 3).map((projectData) => {
          return <ProjectCard project={projectData} key={projectData.heading}/>;
        })}
      </div>
    </section>
  );
}

export default Projects;
