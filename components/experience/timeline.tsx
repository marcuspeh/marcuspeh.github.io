'use client'

import * as React from 'react'
import Box from "@mui/material/Box"
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineSection from './timelineSection'
import ExperienceDataModel from '@/models/experienceDataModel'


interface TimelineProps {
  experience: ExperienceDataModel[]
}

function Experience(props: TimelineProps) {
  const {experience} = props
  
  return (
    <Box>
      <Box xs={12} item  sx={{display: {xs: 'none', md: 'block'}}}>
        <Timeline position="alternate-reverse">
          {
            experience.map((data, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <TimelineSection experience={data} isLeft={index % 2 == 0}/>
                </TimelineContent>
              </TimelineItem>
            ))
          }
        </Timeline>
      </Box>
      <Box xs={12} item  sx={{display: {xs: 'block', md: 'none'}}}>
        <Timeline>
          {
            experience.map(data => (
              <TimelineItem>
                <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <TimelineSection experience={data} isLeft={false}/>
                </TimelineContent>
              </TimelineItem>
            ))
          }
        </Timeline>
      </Box>
    </Box>
  )
}

export default Experience
