import * as React from 'react'

import styled from '@mui/system/styled'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Hidden from '@mui/material/Hidden'

const AboutPicture = styled('img')({
  width: '90%',
})

const MoreInfoButton = styled(Button)({
  fontSize: "1.25rem",
  lineHeight: "1.75",
  paddingLeft: "1rem",
  paddingRight: "1rem",
})

function About() {
  return (
    <Grid
      container   
      direction="row"
      justifyContent="center"
      alignItems="center" 
      sx={{ height: '95vh', marginTop: '5vh' }}
      id="about"
    >
      <Grid item sm={12} md={6} justifyContent="center" >
        <AboutPicture src='/aboutPicture.png' />
      </Grid>

      <Grid item sm={12} md={6}>
        <h3>ABOUT ME {" "}
          <Hidden mdDown> 
            <MoreInfoButton variant='outlined' href={'/Marcus_Peh_Resume.pdf'} >More Info</MoreInfoButton> 
          </Hidden>
        </h3>
        <p>
          I love writing code. Ever since writing my first program 
          in Python during National Service, I have been obsessed 
          with the idea of using software to solve practical problems. 
          Software engineering is a never-ending puzzle that I am 
          passionately engaged in solving. I believe in the power of 
          programming to transform and improve the lives of people 
          around the world.
          <Hidden mdDown>
            <br />
            <br />
            My specialities include quickly learning new skills and 
            programming languages. I managed to learn enough 
            Ruby on Rails to be able to write new API endpoints within 
            2 days. I have also managed to speed up API performance 
            in my previous internship by a whopping 200x.
          </Hidden>
        </p>
        <Hidden mdUp> 
            <MoreInfoButton variant='outlined' href={'/Marcus_Peh_Resume.pdf'} >More Info</MoreInfoButton> 
          </Hidden>
      </Grid>

    </Grid>
  )
}

export default About