import * as React from 'react';
import {Grid, Box} from '@mui/material';
import Image from 'next/image';
import LandingImage from '@/public/landing-picture.png';

export function Landing() {
  return (
    <Box className="flex flex-col items-center justify-between">
      <Grid container className="min-h-screen container pb-0 pt-24 px-8">
        <Grid
          xs={12}
          md={7}
          item
          className="flex flex-row items-center justify-between items-center"
        >
          <Box>
            <Box className="heading2 primary-dark">Hello I&apos;m</Box>
            <Box className="title primary py-8">MARCUS PEH</Box>
            <Box className="subtitle primary-dark">
              Performance-driven final year Computer Science undergraduate at
              National University of Singapore, with experience in Agile
              Software Development. Possess strong problem-solving, analytical
              and time management skills.
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={5} item className="flex flex-row items-end">
          <Image
            src={LandingImage}
            alt={'My picture'}
            className="w-100"
            priority
          />
        </Grid>
      </Grid>
    </Box>
  );
}
