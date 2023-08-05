import * as React from 'react'
import ExperienceDataModel from '@/models/experienceDataModel'
import {Box} from "@mui/material"
import Image from 'next/image'

interface TimelineSectionProps {
  experience: ExperienceDataModel
  isLeft: boolean
}

function TimelineSection(props: TimelineSectionProps) {
  const {experience, isLeft} = props

  return (
    <Box key={experience.id} className='mb-3'>
      {
        isLeft ? (
          <Box className="flex flex-row items-center justify-end">
            <Box className="subtitle">{experience.company}</Box>
            <Image src={experience.logo} alt={experience.logoAlt} className='pl-3'/>
          </Box>
        ) : (
          <Box className="flex flex-row items-center">
            <Image src={experience.logo} alt={experience.logoAlt} className='pr-3'/>
            <Box className="subtitle">{experience.company}</Box>
          </Box>
        )
      }
      <Box className="mt-1">
        <Box className="subtitle">{experience.title}</Box>
        <Box className="text">{experience.date}</Box>
      </Box>

      <Box className="mt-3">
        <ul>
          {
            experience.description.map((description) => 
              <li key={description.id} className='list-inside list-disc'>{description.text}</li>
            )
          }
        </ul>
      </Box>
    </Box>
  )
}

export default TimelineSection