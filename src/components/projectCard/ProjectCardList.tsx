import React from 'react'

import ProjectCard from '../../components/projectCard/ProjectCard'
import { ProjectData } from '../../data/projectData'


const ProjectCardList: React.FC = (): JSX.Element => {
  return (
    	<>
      {
        ProjectData.map((project) => {
          return <ProjectCard 
            title={project.title}
            image={project.image}
            techStacks={project.techStacks}
            description={project.description}
            projectLink={project.projectLink}
          />
        })
      }
    </>
  )
}

export default ProjectCardList
    