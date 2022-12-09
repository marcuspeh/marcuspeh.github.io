import * as React from 'react'

import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'


function Intro() {

  return (
    <Grid
      container   
      direction="column"
      justifyContent="center"
      alignItems="center" 
      sx={{ height: '95vh', marginTop: '5vh' }}
      id="intro"
    >
      <Grid>
        <p>Hi, my name is</p>
        <h1>Marcus Peh.<br />I code for a better tomorrow!</h1>
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
      </Grid>

    </Grid>
  )
}

export default Intro