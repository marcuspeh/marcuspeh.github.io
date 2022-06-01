import React from 'react';

interface props {
    title: string;
    company: string;
    description: string;
    date: string;
    listsHeader?: string;
    lists?: string[];
}


function generateList(lists: string[], listsHeader: string|undefined) {
    return <p>
        {listsHeader}
        <ul>
            {lists.map((a) => <li id={a}>{a}</li>)}
        </ul>
    </p>
    
   
}


const ExperienceInfo: React.FC<props> = (props): JSX.Element => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h4 className="mb-0">{props.title}</h4>
                <div className="mb-2" style={{fontSize:'1.2em'}}>{props.company}</div>
                <p>
                    {props.description}
                    {props.lists ? generateList(props.lists, props.listsHeader) : "" }
                </p>
            </div>
            <div className="flex-shrink-0">{props.date}</div>
        </div>
    );
}

export default ExperienceInfo;
