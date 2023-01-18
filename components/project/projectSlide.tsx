import * as React from 'react'

import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Hidden from "@mui/material/Hidden"

function ProjectSlide(props: any) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "40vh" }}
    >
      <Hidden mdDown>
        <Image src={props.data.image} alt={"Project picture"} width={400} height={400} style={{ marginBottom: "15px" }}/>
      </Hidden>
      <div style={{ marginBottom: "10px", fontSize: "1.2rem"}}><b>{props.data.title}</b></div>
      <div style={{ display: "flex", flexDirection: "row"}}>
        {props.data.techStacks.map((item: string, index: number) => <Chip label={item} key={index} sx={{ marginRight: "3px", marginLeft: "3px" }} />)}
      </div>
      <p style={{ width: "80%", textAlign: "justify" }}>
        {props.data.description}
      </p>

      <Button className="CheckButton" href={props.data.projectLink}>
        Check it out!
      </Button>
    </Grid>
  )
}

export default ProjectSlide