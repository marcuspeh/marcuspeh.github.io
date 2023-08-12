'use client';

import * as React from 'react';
import {Box} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import {TimelineSection} from './timelineSection';
import {ExperienceDataModel} from '@/models/experienceDataModel';

interface TimelineProps {
  experience: ExperienceDataModel[];
}

export function CustomTimeline(props: TimelineProps) {
  const {experience} = props;

  return (
    <Box>
      <Box sx={{display: {xs: 'none', md: 'block'}}}>
        <Timeline position="alternate-reverse">
          {experience.map((data, index) => (
            <TimelineItem key={`${data.id}_desktop`}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineSection experience={data} isLeft={index % 2 === 0} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
      <Box sx={{display: {xs: 'block', md: 'none'}}}>
        <Timeline>
          {experience.map(data => (
            <TimelineItem key={`${data.id}_mobile`}>
              <TimelineOppositeContent
                sx={{display: 'none'}}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineSection experience={data} isLeft={false} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}
