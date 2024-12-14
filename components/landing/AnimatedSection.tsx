'use client';

import {motion} from 'framer-motion';
import {Box, Grid} from '@mui/material';
import Image from 'next/image';
import LandingImage from '@/public/landing-picture.png';

export function AnimatedSection() {
  return (
    <Grid container className="min-h-screen container pb-0 pt-24 px-8">
      <Grid
        xs={12}
        md={7}
        item
        className="flex flex-row items-center justify-between items-center"
      >
        <Box>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <Box className="heading2 primary-dark">Hello I&apos;m</Box>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.7, delay: 0.2}}
          >
            <Box className="title primary py-8">MARCUS PEH</Box>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
          >
            <Box className="subtitle primary-dark">
              Performance-driven Software Engineer with expertise in backend
              engineering, Agile methodologies, and optimization, delivering
              impactful solutions and high-quality results under tight
              deadlines.
            </Box>
          </motion.div>
        </Box>
      </Grid>

      <Grid xs={12} md={5} item className="flex flex-row items-end">
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.7, delay: 0.3}}
          className="w-full"
        >
          <Image
            src={LandingImage}
            alt={'My picture'}
            className="w-100"
            priority
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}
