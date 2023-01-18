import * as React from 'react'

import ContactForm from './contactForm'
import SocialData from "../../data/socialData"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import styled from '@mui/system/styled'
import Stack from '@mui/material/Stack'
import { Hidden } from '@mui/material'
import ProfilePicture from '../../assets/profile_picture.jpg'
import Image from 'next/image'


const NameLabel = styled('h2')({
  margin: "0",
})

const SocialP = styled('p') ({
  marginBlockStart: "0.5rem",
  marginBlockEnd: "0.5rem"
})


const ProfileImg = styled(Image) ({
  width: "90%",
  height: 'auto',
  borderRadius: "50%",
  maxWidth: "30vh",
  maxHeight: "30vh",
  marginRight: "20px"
})

function Contact() {
  return (
    <Grid
      container   
      direction="column"
      justifyContent="center"
      alignItems="left" 
      sx={{ minHeight: '95vh', marginTop: '5vh', padding: "0% 10%"  }}
      id="contact"
    >
      <Grid container item>
        <Grid item xs={12} >
          <h3>CONTACT ME</h3>
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "row"}}>
          <Hidden mdDown>
            <ProfileImg src={ProfilePicture} alt='Profile picture' height={200}/>
          </Hidden>
          <Grid container direction="column" justifyContent="center" alignItems="left" >
            <NameLabel>Marcus Peh</NameLabel>
            <SocialP>Mobile: (+65) 9776 8352 <br /> Email: hkmpeh@gmail.com</SocialP>
            <Stack spacing={2} direction="row">
              {SocialData.map((item, index) => 
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    href={item.link}
                    target="_blank"
                    key={index}
                    sx={{
                      borderRadius: "30%",
                      width: "3rem",
                      height: "3rem"
                    }}
                >
                  {<item.image />}
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <p>Let&apos;s start a conversation</p>
          <ContactForm />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact