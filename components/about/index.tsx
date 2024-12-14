import * as React from 'react';
import {Box} from '@mui/material';
import {AboutContent} from './AboutContent';

export function About() {
  return (
    <Box className="flex flex-col items-center justify-between px-8 py-12 md:py-24">
      <AboutContent />
    </Box>
  );
}
