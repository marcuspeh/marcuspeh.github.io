import React from 'react';
import { Button, Card} from 'react-bootstrap'

interface projectInfo {
    title: string;
    techStacks: string[];
    description: string;
    projectLink: string;
}


function generateTechStack(techStack: string) {
    return <Button variant='outline-dark' size="sm" className='me-1 px-1 py-0' disabled>{techStack}</Button>
}


const Project: React.FC<projectInfo> = (projectInfo): JSX.Element => {
    return (
        <div className="mb-4">
            <Card className="mb-3" style={{ height: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                        {projectInfo.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2">{projectInfo.techStacks.map(generateTechStack)}</Card.Subtitle>
                    <Card.Text>
                        {projectInfo.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" href={projectInfo.projectLink} target="_blank"><i className="fab fa-github"></i> View repository</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Project;
