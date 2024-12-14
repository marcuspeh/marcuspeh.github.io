'use client';

import * as React from 'react';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {Menu as MenuIcon, Close as CloseIcon} from '@mui/icons-material';
import {NavBarLinkData} from '@/data/navBarLinkData';
import {motion} from 'framer-motion';
import {useScrollPosition} from '@/hooks/useScrollPosition';
import {useActiveSection} from '@/hooks/useActiveSection';

function NavBarDesktop({activeSection}: {activeSection: string | null}) {
  const scrollPosition = useScrollPosition();

  return (
    <motion.div
      className="hidden md:flex items-center space-x-6"
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      {NavBarLinkData.map(data => (
        <motion.div
          key={`${data.id}_desktop`}
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
        >
          <Button
            href={`#${data.link}`}
            className={`
              primary-text font-medium
              text-lg
              hover:text-primary 
              transition-colors duration-300
              ${scrollPosition > 50 ? 'py-2' : 'py-3'}
              ${activeSection === data.link ? 'underline' : ''}
            `}
          >
            {data.text}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}

function NavBarMobile({activeSection}: {activeSection: string | null}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setIsOpen(true)}
        className="primary-text"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          className="w-64 h-full bg-white p-4"
          role="presentation"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
        >
          <div className="flex justify-end">
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            {NavBarLinkData.map(data => (
              <ListItem
                button
                key={`${data.id}_mobile`}
                component="a"
                href={`#${data.link}`}
                className={`my-2 ${activeSection === data.link ? 'text-primary' : ''}`}
              >
                <ListItemText primary={data.text} className="primary-text" />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export function NavBar() {
  const scrollPosition = useScrollPosition();
  const sectionIds = NavBarLinkData.map(data => data.link);
  const activeSection = useActiveSection(sectionIds);

  return (
    <AppBar
      position="fixed"
      className={`
        bg-white/60 
        backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${scrollPosition > 50 ? 'py-2' : 'py-4'}
      `}
      elevation={scrollPosition > 50 ? 4 : 0}
    >
      <Toolbar className="container mx-auto px-4">
        <motion.div
          className="flex-grow"
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5}}
        >
          <Button href="#landing" className="subtitle font-bold primary pl-0">
            Marcus Peh
          </Button>
        </motion.div>
        <NavBarDesktop activeSection={activeSection} />
        <NavBarMobile activeSection={activeSection} />
      </Toolbar>
    </AppBar>
  );
}
