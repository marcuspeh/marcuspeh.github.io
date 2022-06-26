import React from 'react'
import { Button, Card} from 'react-bootstrap'

interface projectInfo {
  title: string
  techStacks: string[]
  description: string
  projectLink: string
  image: string
}


function generateTechStack(techStack: string) {
  return <Button variant='outline-dark' size="sm" className='me-1 px-1 py-0 mb-1' disabled>{techStack}</Button>
}


const Project: React.FC<projectInfo> = (projectInfo): JSX.Element => {
  return (
    <div className="mb-4">
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={projectInfo.image} />
        <Card.Body>
          <Card.Title>
            {projectInfo.title}
          </Card.Title>
          <Card.Subtitle className="mb-1">{projectInfo.techStacks.map(generateTechStack)}</Card.Subtitle>
          <Card.Text>
            {projectInfo.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='pb-3'>
          <Button variant="secondary" href={projectInfo.projectLink} target="_blank"><i className="fab fa-github me-1"></i> View repository</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Project
