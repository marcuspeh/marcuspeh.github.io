import * as React from 'react'

import { ProjectData } from '../../data/projectData'
import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Grid'
import ProjectSlide from "./projectSlide"


function Project() {
  return (
    <Grid
      container   
      direction="column"
      justifyContent="center"
      alignItems="left" 
      sx={{ minHeight: '95vh', marginTop: '5vh' }}
      id="project"
    >
      <div>
        <h3>FEATURED PROJECTS</h3>
      <Carousel navButtonsAlwaysVisible={true} interval={5000}>
          { ProjectData.map( (item, i) => <ProjectSlide key={i} data={item} /> ) }
        </Carousel>
      </div>
    </Grid>
  )
}



export default Project