import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="Project-card" key={project.heading}>
    <div className="project-img">
      <img src={project.image.src} alt={project.image.alt} />
    </div>
    <div>
      <p className="project-heading">{project.heading}</p>
      <p className="project-sub-heading">{project.subHeading}</p>
      <p className="project-discription">{project.description}</p>
      <span className="stack-img">
        {project.techStack.map((value) => {
          return (
            <>
              <img src={value.src} alt={value.alt} key={value.alt} />
            </>
          );
        })}
      </span>
    </div>
  </div>
  )
}

export default ProjectCard