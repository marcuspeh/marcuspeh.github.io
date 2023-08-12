'use client';

import {useState, useEffect} from 'react';
import axios from 'axios';
import packageJson from '../package.json';
import {Box} from '@mui/material';

export function Footer() {
  const [lastUpdated, updateLastUpdated] = useState(new Date());

  const getLastUpdate = async () => {
    const url = `https://api.github.com/repos/${packageJson.owner}/${packageJson.repository}/branches/${packageJson.branch}`;
    axios.get(url).then(response => {
      const commitDate = response.data.commit.commit.author.date;

      if (!commitDate) {
        return;
      }

      updateLastUpdated(new Date(commitDate));
    });
  };

  useEffect(() => {
    getLastUpdate();
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
