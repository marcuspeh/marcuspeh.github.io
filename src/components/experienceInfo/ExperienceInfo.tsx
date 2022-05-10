import React from 'react';
import { Button, Card} from 'react-bootstrap'

interface props {
    title: string;
    company: string;
    description: string;
    date: string;
}


const ExperienceInfo: React.FC<props> = (props): JSX.Element => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
            <div className="flex-grow-1">
                <h4 className="mb-0">{props.title}</h4>
                <div className="mb-2" style={{fontSize:'1.2em'}}>{props.company}</div>
                <p>{props.description}</p>
            </div>
            <div className="flex-shrink-0">{props.date}</div>
        </div>
    );
}

export default ExperienceInfo;
