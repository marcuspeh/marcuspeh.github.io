import * as React from 'react'
import experienceData from '../../data/experienceData'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Hidden from '@mui/material/Hidden'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}




function VerticalTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  function tabDetails(props: any, index: number)
  {
      return (
        <TabPanel value={value} index={index}>
          <p>{props.company}</p>
          <p>
            <b>{props.title}</b>
            <br/>
            {props.date}
          </p>
          <ul>
            { props.description.map(x => <li>{x}</li>) }
            { props.listHeader ? 
                <li>
                  {props.listHeader}
                  <ul>
                    {props.listContent?.map((x, index) => <li key={index}>{x}</li>)}
                  </ul>  
                </li> : "" }
          </ul>
        </TabPanel>
      )
  }

  return (
    <>
      <Hidden mdDown>
        <Box
          sx={{ flexGrow: 1, display: 'flex', minHeight: '40vh' }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical Tabs - Experience"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >          
            {
              experienceData.map((x, index) => 
                <Tab key={`tab1-{index}`} label={x.header} {...a11yProps(index)} />
              )
            }
          </Tabs>
          { experienceData.map((x, index) => tabDetails(x, index)) }
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable"  aria-label="Horizontal Tabs - Experience">
              {
                experienceData.map((x, index) => 
                  <Tab key={`tab2-{index}`} label={x.header} {...a11yProps(index)} />
                )
              }
            </Tabs>
          </Box>
          { experienceData.map((x, index) => tabDetails(x, index)) }
        </Box>
      </Hidden>
    </>
  )
}

export default VerticalTabs