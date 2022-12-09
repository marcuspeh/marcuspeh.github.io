import * as React from 'react'
import TabPanel from './tabs'

import Grid from '@mui/material/Grid'


function Experience() {
  return (
    <Grid
      container   
      direction="column"
      justifyContent="center"
      alignItems="left" 
      sx={{ height: '95vh', marginTop: '5vh' }}
      id="experience"
    >
      <div>
        <h3>MY EXPERIENCE</h3>
        <TabPanel />
      </div>
    </Grid>
  )
}

export default Experience