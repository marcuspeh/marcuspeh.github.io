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
        <Button href="#landing" className="subtitle primary underline text-bold">Marcus</Button>
      </Box>
      {
        NavBarLinkData.map(data => (
          <Box className="mr-2" key={`${data.id}_desktop`}>
            <Button href={data.link} className="text primary-text">{data.text}</Button>
          </Box>
        ))
      }
    </Grid>
  )
}

function NavBarMobile() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Grid xs={12} item className="flex-row items-center justify-start pl-3"  sx={{display: {xs: 'flex', md: 'none'}}}>
      <Button aria-label="menu" variant="outlined" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </Button>
      <Button href="#landing" className="subtitle primary underline text-bold">Marcus</Button>
      <Drawer
        anchor={'top'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
        >
          <List>
            {
              NavBarLinkData.map(data => (
                <ListItem disablePadding key={`${data.id}_mobile`}>
                  <ListItemButton href={data.link}>
                    <ListItemText primary={data.text} />
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
        <Grid container className="container">
          <NavBarDesktop />
          <NavBarMobile />
        </Grid>
      </Box>
    )
}

export default NavBar
