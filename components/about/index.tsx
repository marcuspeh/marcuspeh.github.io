import * as React from 'react'

import styled from '@mui/system/styled'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Hidden from '@mui/material/Hidden'
import AboutPicture from '../../assets/about_picture.jpeg'
import Image from 'next/image'

const MoreInfoButton = styled(Button)({
  fontSize: "1.25rem",
  lineHeight: "1.75",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  margin: "1rem 0rem"
})

function About() {
  return (
    <Grid
      container   
      direction="row"
      justifyContent="center"
      alignItems="center" 
      sx={{ minHeight: '95vh', marginTop: '5vh', padding: "0% 10%" }}
      id="about"
    >
      <Grid item sm={12} md={6} sx={{ display: "flex", justifyContent: "center"}}>
        <Image src={AboutPicture} alt={'About me picture'} style={{ width: "90%", height: "auto"}}/>
      </Grid>

      <Grid item sm={12} md={6}>
        <div style={{
          display: "flex",
          flexDirection: "row", 
          justifyContent: "space-between"
        }}>
          <h3>ABOUT ME </h3>
          <MoreInfoButton variant='outlined' href={'/moreInfo'} >More Info</MoreInfoButton> 
        </div>
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
            I am interested in working on backend development and find ways 
            to speed things up. I find it rewarding to be able to work on 
            complex problems and find solutions that are both efficient and 
            scalable. In my previous internship, I even managed to speed up 
            API performance by a whopping 200x.
          </Hidden>
        </p>
      </Grid>

    </Grid>
  )
}

export default About