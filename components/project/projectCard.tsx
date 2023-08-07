import * as React from 'react'
import ProjectDataModel from '@/models/projectDataModel'
import { CardContent, CardMedia, Grid, Box, Chip, Card } from '@mui/material'

function ProjectCard(projectData: ProjectDataModel) {
  return <Grid item xs={12} sm={6} md={4} key={projectData.id}>
    <Card className="h-full background rounded-2xl">
      <CardMedia
        component="img"
        image={projectData.pic}
        title={`${projectData.title} image`}
        className="p-4 pb-0"
      />
      <CardContent>
        <Box className="subtitle">{projectData.title}</Box>
        <Box className="flex flex-row flex-wrap">
          {
            projectData.tech.map(tech => <Chip label={tech.text} key={tech.id} className="mr-2 my-1 font-semibold background-dark primary-light" />)
          }
        </Box>
        <Box className="text">{projectData.description}</Box>
      </CardContent>
    </Card>
  </Grid>
}

export default ProjectCard