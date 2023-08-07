import * as React from 'react'
import {Grid, Box, Tooltip, Button} from "@mui/material"
import Image from 'next/image'
import {SkillsIconData} from '@/data/skillsIconData'
import SkillsIconModel from '@/models/skillsIconModel'


function Skills() {
    return (
      <div className='flex flex-col items-center justify-between py-24 px-8'>
        <Grid container className="container">
          <Grid xs={12} item className="flex flex-col items-center justify-between p-6">
            <Box className='heading1 primary'>Skills</Box>
            <Box className='subtitle primary-dark' sx={{display: {xs: 'none', md: 'flex'}}}>Here are some technology I worked with</Box>
          </Grid>              
          <Grid xs={12} item>
            <Grid container columns={12}>
              {
                SkillsIconData.map((skillsIcon: SkillsIconModel) => (
                  <Grid md={1} sm={2} xs={3} item key={skillsIcon.id}>
                    <Tooltip title={skillsIcon.text}>
                      <Button href={skillsIcon.link} target="_blank" className='m-2 max-w-64'>
                        <Image src={skillsIcon.pic} alt={skillsIcon.text}/>
                      </Button>
                    </Tooltip>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
}

export default Skills
