import * as React from 'react'

import ContactForm from './contactForm'
import SocialData from "../../data/socialData"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import styled from '@mui/system/styled'
import Stack from '@mui/material/Stack'
import { Hidden } from '@mui/material'


const NameLabel = styled('h2')({
  margin: "0",
})

const SocialP = styled('p') ({
  marginBlockStart: "0.5rem",
  marginBlockEnd: "0.5rem"
})

const SocialButton = styled(Button) ({
  borderRadius: "30%",
  width: "3rem",
  height: "3rem"
})

const ProfileImg = styled('img') ({
  width: "90%",
  borderRadius: "50%",
})

function Contact() {
  return (
    <Grid
      container   
      direction="column"
      justifyContent="center"
      alignItems="left" 
      sx={{ minHeight: '95vh', marginTop: '5vh' }}
      id="contact"
    >
      <Grid container item>
        <Grid item xs={12}>
          <h3>CONTACT ME</h3>
        </Grid>
        <Grid item xs={12} md={4}>
          <Hidden mdDown>
            <ProfileImg src='/profile.jpeg' />
          </Hidden>
        </Grid>
        <Grid container item xs={12} md={8} direction="column" justifyContent="center" alignItems="left" >
          <NameLabel>Marcus Peh</NameLabel>
          <SocialP>Mobile: (+65) 9776 8352 <br /> Email: hkmpeh@gmail.com</SocialP>
          <Stack spacing={2} direction="row">
            {SocialData.map((item, index) => 
              <SocialButton 
                  variant="contained" 
                  color="primary" 
                  size="medium" 
                  href={item.link} 
                  target="_blank"
                  key={index}
              >
                {<item.image />}
              </SocialButton>
            )}
          </Stack>
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