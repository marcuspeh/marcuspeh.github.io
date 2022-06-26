import React from 'react';
import { ProjectData } from '../../data/projectData'
import ProjectCard from '../../components/projectCard/ProjectCard';


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
        