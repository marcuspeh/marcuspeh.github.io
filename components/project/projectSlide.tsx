import * as React from 'react'

import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

function ProjectSlide(props: any) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "40vh" }}
    >
      <h3>{props.data.title}</h3>
      <div style={{ display: "flex", flexDirection: "row", overflow: "scroll"}}>
        {props.data.techStacks.map((item: string, index: number) => <Chip label={item} key={index} sx={{ marginRight: "3px", marginLeft: "3px" }} />)}
      </div>
      <p style={{ width: "50%", textAlign: "justify" }}>
        {props.data.description}
      </p>

      <Button className="CheckButton" href={props.data.projectLink}>
        Check it out!
      </Button>
    </Grid>
  )
}

export default ProjectSlide