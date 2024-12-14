import * as React from 'react';
import {Box} from '@mui/material';
import {AnimatedSection} from './AnimatedSection';

export function Landing() {
  return (
    <Box className="flex flex-col items-center justify-between">
      <AnimatedSection />
    </Box>
  );
}
