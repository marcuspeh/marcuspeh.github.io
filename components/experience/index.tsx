'use client';

import * as React from 'react';
import {Grid, Box, Button} from '@mui/material';
import {CustomTimeline} from './timeline';
import {WorkData} from '@/data/workData';
import {HackathonData} from '@/data/hackathonData';
import {TeachData} from '@/data/teachData';

enum TabStateEnum {
  TEACH,
  WORK,
  HACK,
}

export function Experience() {
  const [tabStateEnum, setTabStateEnum] = React.useState(TabStateEnum.WORK);

  const workClick = () => {
    setTabStateEnum(TabStateEnum.WORK);
  };

  const hackClick = () => {
    setTabStateEnum(TabStateEnum.HACK);
  };

  const teachClick = () => {
    setTabStateEnum(TabStateEnum.TEACH);
  };

  return (
    <div className="flex flex-col items-center justify-between px-8 py-12 md:py-24">
      <Grid container className="container">
        <Grid
          xs={12}
          item
          className="flex flex-col items-center justify-between p-6"
        >
          <Box className="heading1 primary">Experience</Box>
        </Grid>
        <Grid
          xs={12}
          item
          className="flex flex-row items-center justify-center pb-3"
        >
          <Button onClick={workClick}>
            <Box
              className={
                'subtitle underline ' +
                (tabStateEnum === TabStateEnum.WORK
                  ? 'primary-text'
                  : 'primary-text-inactive')
              }
            >
              ./work
            </Box>
          </Button>
          <Button onClick={hackClick}>
            <Box
              className={
                'subtitle underline ' +
                (tabStateEnum === TabStateEnum.HACK
                  ? 'primary-text'
                  : 'primary-text-inactive')
              }
            >
              ./hack
            </Box>
          </Button>
          <Button onClick={teachClick}>
            <Box
              className={
                'subtitle underline ' +
                (tabStateEnum === TabStateEnum.TEACH
                  ? 'primary-text'
                  : 'primary-text-inactive')
              }
            >
              ./teach
            </Box>
          </Button>
        </Grid>
        <Grid xs={12} item>
          <CustomTimeline
            experience={
              tabStateEnum === TabStateEnum.WORK
                ? WorkData
                : tabStateEnum === TabStateEnum.HACK
                ? HackathonData
                : TeachData
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
