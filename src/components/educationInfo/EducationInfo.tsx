import React from 'react';

import transcript from '../../assets/file/Marcus_Peh_Transcript.pdf';

const EducationInfo: React.FC = (): JSX.Element => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h4 className="mb-0">National University Of Singapore</h4>
                <div className="subheading mb-0">Bachelor of Computing, Computer Science (Honors)</div>
                <div className="mb-3">GPA: 4.79 / 5.00</div>
                <p className="mb-0">Relevant modules includes: </p>
                <ul>
                    <li>(Grade: A) CS1010X: Programming Methodology I</li>
                    <li>(Grade: A<sup>-</sup>) CS1231S: Discrete Structures</li>
                    <li>(Grade: A<sup>+</sup>) CS2030S: Programming Methodology II</li>
                    <li>(Grade: A<sup>-</sup>) CS2040S: Data Structures and Algorithms</li>
                    <li>(Grade: A<sup>+</sup>) CS2100: Computer Organisation</li>
                    <li>(Grade: A<sup></sup>) CS2103T: Software Engineering</li>
                    <li>(Grade: A<sup>+</sup>) CS2106: Introduction to Operating Systems</li>
                </ul>
                <a href={transcript} target="_blank" style={{textDecoration: 'none'}}>Click here to view my transcript.</a>
            </div>
            <div className="flex-shrink-0">August 2020 - May 2024</div>
        </div>
    )
}

export default EducationInfo;
        