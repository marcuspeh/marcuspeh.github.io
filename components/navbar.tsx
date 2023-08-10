'use client'

import * as React from 'react'
import {Box, Button, Grid} from "@mui/material"
import {Menu as MenuIcon} from '@mui/icons-material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import {NavBarLinkData} from '@/data/navBarLinkData'


function NavBarDesktop() {
  return (
    <Grid xs={12} item className="flex-row items-end justify-start" sx={{display: {xs: 'none', md: 'flex'}}}>
      <Box className="mr-2">
        <Button href="#landing" className="subtitle primary underline font-black pl-0">Marcus</Button>
      </Box>
      {
        NavBarLinkData.map(data => (
          <Box className="mr-2" key={`${data.id}_desktop`}>
            <Button href={data.link} className="subtitle primary-text font-bold">{data.text}</Button>
          </Box>
        ))
      }
    </Grid>
  )
}

function NavBarMobile() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Grid xs={12} item className="flex-row items-center justify-start"  sx={{display: {xs: 'flex', md: 'none'}}}>
      <Button aria-label="menu" variant="outlined" onClick={() => setIsOpen(true)} className="mr-2 primary border-color-primary">
        <MenuIcon />
      </Button>
      <Button href="#landing" className="subtitle primary font-black">Marcus</Button>
      <Drawer
        anchor={'top'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
          className="background"
        >
          <List>
            {
              NavBarLinkData.map(data => (
                <ListItem disablePadding key={`${data.id}_mobile`}>
                  <ListItemButton href={data.link}>
                    <ListItemText primary={data.text} className="text primary-dark" />
                  </ListItemButton>
                </ListItem>            
              ))
            }
          </List>
        </Box>
      </Drawer>
    </Grid>
  )
}

function NavBar() {
    return (
      <Box className='flex flex-col items-center absolute top-4 w-screen'>
        <Box className="px-8 container">
          <Grid container className="pb-2 border-b border-color-background">
            <NavBarDesktop />
            <NavBarMobile />
          </Grid>          
        </Box>
      </Box>
    )
}

export default NavBar
