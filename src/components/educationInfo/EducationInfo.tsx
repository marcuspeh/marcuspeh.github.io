import React from 'react';
import { EducationData } from '../../data/educationData'

const EducationInfo: React.FC = (): JSX.Element => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h4 className="mb-0">{EducationData.univerity[0]}</h4>
                <div className="subheading mb-0">{EducationData.major[0]}</div>
                <div className="mb-3">GPA: {EducationData.gpa[0]}</div>
                {
                    EducationData.modules && EducationData.modules.length > 0 ?     
                    <>           
                        <p className="mb-0">Relevant modules includes: </p>
                        <ul>
                            {EducationData.modules.map((mod) => {
                                return <li key={mod}>{mod}</li>
                            })}
                        </ul>
                    </>
                    : <></>
                }   
            </div>
            <div className="flex-shrink-0">{EducationData.date[0]}</div>
        </div>
    )
}

export default EducationInfo;
        