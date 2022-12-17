import * as React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Box, Hidden } from '@mui/material'


function Intro() {

  return (
    <Grid
      container   
      direction="column"
      justifyContent="center"
      alignItems="center" 
      sx={{ minHeight: '95vh', marginTop: '5vh', padding: "0% 10%" }}
      id="intro"
    >
      <Box>
        <p>Hi, my name is</p>
        <h1 style={{margin: "1rem 0rem"}}>Marcus Peh.<br /><Hidden mdDown>I code for a better tomorrow!</Hidden></h1>
        <p>
          Performance-driven penultimate Computer Science undergraduate at National 
          University of Singapore, with experience in Agile Software Development. Possess 
          strong problem-solving, analytical and time management skills.
        </p>
        <Button 
          variant='outlined' 
          href={'/Marcus_Peh_Resume.pdf'} 
          target="_blank" 
          rel="noopener noreferrer"
          size="large"
        >
          Download my resume
        </Button>
      </Box>
    </Grid>
  )
}

export default Intro