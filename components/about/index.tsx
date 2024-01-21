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
              I’m <b>MARCUS PEH</b>, a Computer Science (honors) graduate from
              National University of Singapore. My passion lies in software
              engineering, and I find joy in writing code to tackle practical
              challenges. From my early days of programming in Python during
              National Service, I have been captivated by the ability of
              software to solve real-world problems. I firmly believe in the
              transformative power of programming, and I am dedicated to
              leveraging it to enhance the lives of people globally.
            </Box>
            <br />
            <Box className="text">
              I find great satisfaction in tackling complex problems and
              devising efficient and scalable solutions. In fact, during a
              previous internship, I successfully enhanced API performance by an
              astounding 200x, which highlighted my ability to optimize systems
              and improve overall efficiency.
            </Box>
            <br />
            <Box className="text">
              As I continue to grow as a Software Engineer, I am constantly
              seeking new challenges and opportunities to expand my skills. I am
              particularly focused on leveraging my expertise to develop
              high-performance applications that address real-world issues and
              provide users with exceptional experiences.
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
            I&apos;m Marcus Peh, a Computer Science (honors) graduate from
            National University of Singapore. I&apos;m passionate about software
            engineering and enjoy using code to solve practical challenges.
            Since my early days of programming in Python, I&apos;ve been
            fascinated by the transformative power of software in solving
            real-world problems. During a previous internship, I successfully
            optimized API performance by an impressive 200x, demonstrating my
            ability to enhance system efficiency. As a Software Engineer, I
            continuously seek new challenges to grow and expand my skills. My
            focus is on developing high-performance applications that address
            real-world issues and deliver exceptional user experiences.
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
