import React from 'react'

import { EducationData } from '../../data/educationData'

const EducationInfo: React.FC = (): JSX.Element => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between",
        width: "100%"
      }}>
        <p><b>{EducationData.univerity}</b></p>
        <p>{EducationData.date}</p>
      </div>
      <p style={{margin: "0"}}>{EducationData.major}</p>
      <p  style={{margin: "0"}}>GPA: {EducationData.gpa}</p>
      {
        EducationData.modules && EducationData.modules.length > 0 ?   
        <>       
          <p  style={{marginBottom: "0"}}>Relevant modules includes: </p>
          <ul style={{marginTop: "0.5rem"}}>
            {EducationData.modules.map((mod) => {
              return <li key={mod}><p style={{margin: "0"}}>{mod}</p></li>
            })}
          </ul>
        </>
        : <></>
      }   
    </div>
  )
}

export default EducationInfo
    