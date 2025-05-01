'use client';

import * as React from 'react';
import {Box, Button} from '@mui/material';
import {CustomTimeline} from './timeline';
import {WorkData} from '@/data/workData';
import {HackathonData} from '@/data/hackathonData';
import {TeachData} from '@/data/teachData';
import {motion, AnimatePresence} from 'framer-motion';
import {Work, Code, School} from '@mui/icons-material';

enum TabStateEnum {
  TEACH,
  WORK,
  HACK,
}

export function Experience() {
  const [tabStateEnum, setTabStateEnum] = React.useState(TabStateEnum.WORK);

  const tabs = [
    {state: TabStateEnum.WORK, label: 'Work', icon: <Work />},
    {state: TabStateEnum.HACK, label: 'Hack', icon: <Code />},
    {state: TabStateEnum.TEACH, label: 'Teach', icon: <School />},
  ];

  return (
    <div className="flex flex-col items-center justify-between px-8 py-16 md:py-32">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="container max-w-6xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <Box className="heading1 primary">Experience</Box>
          <Box className="subtitle primary-dark max-w-2xl mx-auto">
            Explore my professional journey and achievements
          </Box>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{once: true}}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full shadow-lg p-1">
            {tabs.map(tab => (
              <Button
                key={tab.state}
                onClick={() => setTabStateEnum(tab.state)}
                className={`
                  px-6 py-2 rounded-full transition-all duration-300
                  ${
                    tabStateEnum === tab.state
                      ? 'primary-text'
                      : 'primary-text-inactive hover:bg-gray-200'
                  }
                `}
                startIcon={tab.icon}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          viewport={{once: true}}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tabStateEnum}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.3}}
            >
              <CustomTimeline
                experience={
                  tabStateEnum === TabStateEnum.WORK
                    ? WorkData
                    : tabStateEnum === TabStateEnum.HACK
                      ? HackathonData
                      : TeachData
                }
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
