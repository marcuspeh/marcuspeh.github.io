import * as React from 'react';
import {ProjectDataModel} from '@/models/projectDataModel';
import {CardContent, CardMedia, Box, Chip, Card} from '@mui/material';
import {motion} from 'framer-motion';
import {GitHub} from '@mui/icons-material';

export function ProjectCard(projectData: ProjectDataModel) {
  return (
    <motion.div
      whileHover={{y: -8}}
      transition={{duration: 0.3}}
      className="h-full"
    >
      <Card
        className="
        h-full rounded-2xl overflow-hidden
        bg-white
        shadow-lg hover:shadow-xl
        transition-all duration-300
      "
      >
        <div className="relative group">
          <CardMedia
            component="img"
            image={projectData.pic}
            title={`${projectData.title} image`}
            className="
              aspect-video object-cover
              transform group-hover:scale-105
              transition-transform duration-300
            "
          />
          {projectData.link && (
            <motion.div
              initial={{opacity: 0}}
              whileHover={{opacity: 1}}
              className="
                absolute inset-0
                bg-black/50 backdrop-blur-sm
                flex items-center justify-center
                gap-4
                transition-opacity duration-300
              "
            >
              <motion.a
                href={projectData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-full
                  bg-white/10 hover:bg-white/20
                  text-white
                  transition-colors duration-300
                "
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <GitHub className="text-2xl" />
              </motion.a>
            </motion.div>
          )}
        </div>

        <CardContent className="p-6">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <Box className="subtitle">{projectData.title}</Box>

            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {projectData.tech.map(tech => (
                <Chip
                  key={tech.id}
                  label={tech.text}
                  className="bg-primary/10 text-primary"
                  size="small"
                />
              ))}
            </div>

            <Box className="text mb-4">{projectData.description}</Box>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
