'use client';

import {Grid, Box, Button} from '@mui/material';
import Image from 'next/image';
import AboutImage from '@/public/about-picture.jpg';
import {motion} from 'framer-motion';
import {Download, Mail} from '@mui/icons-material';

export function AboutContent() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      className="container"
    >
      <Grid container spacing={4}>
        {/* Header Section */}
        <Grid xs={12} item>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
            className="flex flex-col items-center justify-between items-center p-6 mb-12"
          >
            <Box className="heading1 primary">About</Box>
            <Box className="subtitle primary-dark">Let me introduce myself</Box>
          </motion.div>
        </Grid>

        {/* Desktop Layout */}
        <Grid container spacing={8} sx={{display: {xs: 'none', md: 'flex'}}}>
          <Grid item md={5}>
            <motion.div
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
              viewport={{once: true}}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-3xl transform rotate-6" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={AboutImage}
                  alt={'My picture'}
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </Grid>

          <Grid item md={7}>
            <motion.div
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 0.4}}
              viewport={{once: true}}
              className="space-y-4"
            >
              <Box className="text-lg leading-relaxe">
                I&apos;m <b>Marcus Peh</b>, a Software Engineer passionate about
                building scalable systems and solving complex problems.
                Currently at <b>TikTok</b>, I design backend systems powering
                TikTok Live, from global user analysis pipelines to low-code
                data widgets.
              </Box>
              <Box className="text-lg leading-relaxe">
                Previously at Google, ByteDance, and GovTech, I&apos;ve
                delivered impact ranging from a 93% faster QR code flow at
                Google Pay to a 200x API performance boost at GovTech. With a
                strong foundation in Computer Science (NUS, Highest Distinction)
                and ongoing Master&apos;s studies at Georgia Tech, I&apos;m
                driven to push the boundaries of what software can achieve.
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Mobile Layout */}
        <Grid item xs={12} sx={{display: {xs: 'block', md: 'none'}}}>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="text-center space-y-4"
          >
            <Box className="text-lg leading-relaxed">
              I&apos;m <b>Marcus Peh</b>, a Software Engineer at TikTok
              experience across Google, ByteDance, and GovTech. I specialize in
              building scalable backend systems, from powering TikTok
              Live&apos;s global data pipelines to boosting API performance by
              200x. With a strong foundation in Computer Science (NUS, Highest
              Distinction) and ongoing Master&apos;s studies at Georgia Tech,
              I&apos;m passionate about creating high-performance solutions that
              make a global impact.
            </Box>
          </motion.div>
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12} md={6}>
          <motion.div
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className="flex flex-col items-center items-center"
          >
            <Button
              variant="contained"
              href="/#contact"
              fullWidth
              className="
                bg-gradient-to-r from-primary to-primary-dark
                hover:from-primary-dark hover:to-primary
                text-white py-3 rounded-full
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
              startIcon={<Mail />}
            >
              Contact me
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}>
            <Button
              variant="outlined"
              href={'/Marcus_Peh_Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              className="
                border-2 border-primary text-primary
                hover:bg-primary/10
                py-3 rounded-full
                transition-all duration-300
              "
              startIcon={<Download />}
            >
              Download Resume
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
