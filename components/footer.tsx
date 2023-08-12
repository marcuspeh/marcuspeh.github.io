'use client';

import {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import {fetchLastUpdate} from '@/services/api/fetchLastUpdate';

export function Footer() {
  const [lastUpdated, updateLastUpdated] = useState(new Date());

  useEffect(() => {
    fetchLastUpdate().then(lastDate => {
      if (!lastDate) {
        return;
      }
      updateLastUpdated(new Date(lastDate));
    });
  }, []);

  return (
    <Box className="flex flex-row justify-center pt-5 pb-1 primary-text-inactive">
      <Box>&copy; {new Date().getFullYear()}, Marcus Peh</Box>
      <Box className="mx-2" sx={{display: {xs: 'none', md: 'flex'}}}>
        |
      </Box>
      <Box sx={{display: {xs: 'none', md: 'flex'}}}>
        Last Updated: {lastUpdated.toDateString()}
      </Box>
    </Box>
  );
}
