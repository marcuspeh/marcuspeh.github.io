'use client'

import * as React from 'react'
import {Grid, Box, Tooltip, Button} from "@mui/material"
import Image from 'next/image'
import ContactForm from './contactForm'
import ContactData from '@/data/contactData'
import ContactDataModel from '@/models/contactDataModel'

function Contact() {
  return (
    <Box className='flex flex-col items-center justify-between py-24 px-8'>
      <Grid container className="container">
        <Grid xs={12} item className="flex flex-col items-center justify-between">
          <Box className='heading1 primary'>Contact</Box>
          <Box className="subtitle primary-dark">Let&apos;s make a connection</Box>
        </Grid>
        <Grid xs={12} item className="flex flex-row items-center justify-center">
        {
          ContactData.map((contact: ContactDataModel) => (
            <Box key={contact.id}>
              <Tooltip title={contact.text}>
                <Button href={contact.link} target="_blank" className='m-2 max-w-64'>
                  <Image src={contact.pic} alt={contact.text}/>
                </Button>
              </Tooltip>
            </Box>
          ))
        }
        </Grid>
        <Grid xs={12} item className="flex flex-row items-center justify-center py-8">
          <Box className="bg-transparent px-3 text primary-text">
            ---------- OR ----------
          </Box>
        </Grid>
        <Grid xs={12} item className="flex flex-row items-center justify-center">
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
