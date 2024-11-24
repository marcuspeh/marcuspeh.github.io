import * as React from 'react';
import {Grid, Box, Button} from '@mui/material';
import Image from 'next/image';
import AboutImage from '@/public/about-picture.jpg';

export function About() {
  return (
    <Box className="flex flex-col items-center justify-between px-8 py-12 md:py-24">
      <Grid container className="container">
        <Grid
          xs={12}
          item
          className="flex flex-col items-center justify-between items-center p-6"
        >
          <Box className="heading1 primary">About</Box>
          <Box
            className="subtitle primary-dark"
            sx={{display: {xs: 'none', md: 'flex'}}}
          >
            Let me introduce myself
          </Box>
        </Grid>
        <Grid xs={4} item sx={{display: {xs: 'none', md: 'flex'}}}>
          <Image
            src={AboutImage}
            alt={'My picture'}
            className="w-100 p-12 rounded-full"
          />
        </Grid>
        <Grid
          xs={8}
          item
          className="flex-row items-center items-center"
          sx={{display: {xs: 'none', md: 'flex'}}}
        >
          <Box>
            <Box className="text">
              I&apos;m <b>Marcus Peh</b>, a Computer Science (Honors) graduate from the
              National University of Singapore, passionate about software
              engineering and crafting solutions to real-world challenges. My
              journey began during National Service, where programming in
              Python sparked my fascination with software&apos;s transformative
              potential.
              <br />
            </Box>
            <br />
            <Box className="text">
              I thrive on solving complex problems and optimizing systems, as
              demonstrated by enhancing API performance by 200x during an
              internship. With a focus on developing high-performance,
              user-centric applications, I am committed to leveraging technology
              to create meaningful impact globally.
              
            </Box>
            <br />
            <Box className="text">
              As I grow in my career, I look forward to tackling new challenges
              and pushing the boundaries of what software can achieve.
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          item
          className="flex-row items-center items-center"
          sx={{display: {xs: 'flex', md: 'none'}}}
        >
          <Box className="text text-center">
            I&apos;m <b>Marcus Peh</b>, a Computer Science (Honors) graduate from the
            National University of Singapore. Passionate about software
            engineering, I specialize in developing high-performance
            applications and optimizing systems to solve real-world
            challenges. With a track record of improving API performance by
            200x, I&apos;m committed to leveraging technology to create impactful,
            user-centric solutions.
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          className="flex flex-col items-center items-center"
        >
          <Button
            variant="contained"
            href="/#contact"
            className="background-primary max-w-full w-96 mt-3"
          >
            Contact me
          </Button>
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          className="flex flex-col items-center items-center mt-3"
        >
          <Button
            variant="outlined"
            href={'/Marcus_Peh_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-full w-96"
          >
            Download my resume
          </Button>
        </Grid>
        <Grid xs={12} item sx={{display: {xs: 'block', md: 'none'}}}>
          <Image
            src={AboutImage}
            alt={'My picture'}
            className="w-100 pt-12 rounded-full"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
