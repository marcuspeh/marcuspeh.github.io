'use client';

import * as React from 'react';
import {Grid, Box} from '@mui/material';
import {ProjectData} from '@/data/projectData';
import {ProjectCard} from './projectCard';
import {motion} from 'framer-motion';
export function Project() {
  return (
    <div className="flex flex-col items-center justify-between px-8 py-16 md:py-32">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="container max-w-6xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <Box className="heading1 primary">Projects</Box>
          <Box className="subtitle primary-dark max-w-2xl mx-auto">
            Explore some of my awesome projects
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{once: true}}
        >
          <Grid container spacing={4}>
            {ProjectData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.1 * index}}
                  viewport={{once: true}}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          viewport={{once: true}}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/marcuspeh"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-3
              background-primary hover:background-primary-dark
              text-white font-semibold
              rounded-full shadow-lg
              transition-all duration-300
              transform hover:-translate-y-1
            "
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
