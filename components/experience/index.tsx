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
      sx={{ minHeight: '95vh', marginTop: '5vh', padding: "0% 10%"  }}
      id="experience"
    >
      <div>
        <h3>MY EXPERIENCE</h3>
        <div style={{ overflow:"hidden", width: "80vw" }}>
          <TabPanel />
        </div>
      </div>
    </Grid>
  )
}

export default Experience