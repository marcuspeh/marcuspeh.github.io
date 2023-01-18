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
      sx={{ minHeight: '95vh', marginTop: '5vh', padding: "0% 10%"  }}
      id="project"
    >
      <div>
        <h3>FEATURED PROJECTS</h3>
        <div style={{ border: "ridge 1px grey", padding: "20px 0px", borderRadius: "8px" }}>
          <Carousel interval={5000}>
            { ProjectData.map( (item, i) => <ProjectSlide key={i} data={item} /> ) }
          </Carousel>
        </div>
      </div>
    </Grid>
  )
}


export default Project