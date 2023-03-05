import { Grid } from '@mui/material'
import EducationInfo from '../components/education'
import NavBar from '../components/navbar'
import Skills from "../components/skills"

export default function Home() {
  return (
    <>
      <Grid
        container   
        direction="column"
        justifyContent="center"
        alignItems="left" 
        sx={{ minHeight: '95vh', margin: '10vh 0', padding: "0% 10%"  }}
        id="experience"
      >
        <Grid item>
          <h3>EDUCATION</h3>
          <EducationInfo />
        </Grid>
        <Grid item>
          <h3>SKILLS</h3>
          <Skills />
        </Grid>
      </Grid>
    </>
  )
}
