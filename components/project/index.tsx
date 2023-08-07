import * as React from 'react'
import {Grid, Box} from "@mui/material"
import ProjectData from '@/data/projectData'
import ProjectCard from './projectCard'

function Project() {
    return (
      <div className='flex flex-col items-center justify-between py-24 px-8'>
        <Grid container className="container">
          <Grid xs={12} item className="flex flex-col items-center justify-between items-center p-6">
            <Box className='heading1 primary'>Project</Box>
            <Box className='subtitle primary-dark' sx={{display: {xs: 'none', md: 'flex'}}}>Here’s some of my awesome projects</Box>
          </Grid>              
          <Grid xs={12} item className="flex flex-row justify-center pt-10">
            <Grid container alignItems="stretch" spacing={1}>
              {ProjectData.map(data => ProjectCard(data))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
}

export default Project
