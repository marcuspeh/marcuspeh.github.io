import * as React from 'react';
import {Grid, Box, Button} from '@mui/material';
import Image from 'next/image';
import AboutImage from '@/public/about-picture.jpg';
import { AboutContent } from './AboutContent';
import { motion } from 'framer-motion';

export function About() {
  return (
    <Box className="flex flex-col items-center justify-between px-8 py-12 md:py-24">
      <AboutContent />
    </Box>
  );
}
