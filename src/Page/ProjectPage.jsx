import React from 'react'
import TitleBox from '../Components/Common/TitleBox'
import { listOfProject } from '../ProjectData'
import ProjectCard from '../Components/Common/ProjectCard'

function ProjectPage() {
  return (
    <div className='section container'>
        <TitleBox>
          <h1 className="text-center section-title">Projects</h1>
        </TitleBox>

      <div className='project-list'>

        {
          listOfProject.map((item)=>{
            return <ProjectCard project={item} key={item.heading}/>
          })
        }
      </div>

    </div>
  )
}

export default ProjectPage