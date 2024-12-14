'use client';

import * as React from 'react';
import {Grid, Box, Tooltip} from '@mui/material';
import Image from 'next/image';
import {SkillsIconData} from '@/data/skillsIconData';
import {SkillsIconModel} from '@/models/skillsIconModel';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

export function Skills() {
  return (
    <div className="flex flex-col items-center justify-between px-8 py-16 md:py-32">
      <Grid container className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <Grid
            xs={12}
            item
            className="flex flex-col items-center justify-between p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between px-8 py-16 md:py-32"
            >
              <Box className="heading1 primary">Skills</Box>
              <Box
                className="subtitle primary-dark"
                sx={{display: {xs: 'none', md: 'flex'}}}
              >
                Here are some technologies I&apos;ve worked with
              </Box>
            </motion.div>
          </Grid>
          
          {/* Skills Grid */}
          <Grid xs={12} item>
            <Grid container spacing={4} columns={10}>
              {SkillsIconData.map((skillsIcon: SkillsIconModel, index: number) => (
                <Grid item md={1} xs={2} key={skillsIcon.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: Math.min(0.1 * index, 0.8) // Cap the maximum delay
                  }}
                  viewport={{ once: true }}
                >
                  <Tooltip title={skillsIcon.text}>
                    <Button
                      href={skillsIcon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-2 max-w-64"
                    >
                      <Image src={skillsIcon.pic} alt={skillsIcon.text} />
                    </Button>
                  </Tooltip>
                </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </div>
  );
}