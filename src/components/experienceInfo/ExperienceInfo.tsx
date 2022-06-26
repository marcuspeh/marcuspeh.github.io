import React from 'react'

interface props {
  title: string
  company: string
  description: string
  date: string
  listsHeader?: string
  lists?: string[]
}


function generateList(lists: string[], listsHeader: string|undefined) {
  return <>
    <p>{listsHeader}</p>
    <ul>
      {lists.map((a) => <li key={a}>{a}</li>)}
    </ul>
  </>
}


const ExperienceInfo: React.FC<props> = (props): JSX.Element => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h4 className="mb-0">{props.title}</h4>
        <div className="mb-2" style={{fontSize:'1.2em'}}>{props.company}</div>
        <div>
          <p>{props.description}</p>
          {props.lists ? generateList(props.lists, props.listsHeader) : "" }
        </div>
      </div>
      <div className="flex-shrink-0">{props.date}</div>
    </div>
  )
}

export default ExperienceInfo
