import React from 'react';
import { Button, Card} from 'react-bootstrap'

interface projectInfo {
    title: string;
    techStack: string;
    description: string;
    projectLink: string;
}


const Project: React.FC<projectInfo> = (projectInfo): JSX.Element => {
    return (
        <div className="mb-4">
            <Card className="mb-3" style={{ height: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{projectInfo.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{projectInfo.techStack}</Card.Subtitle>
                    <Card.Text>{projectInfo.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" href={projectInfo.projectLink} target="_blank">View more</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Project;
