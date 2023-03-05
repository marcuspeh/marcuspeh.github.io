import { useState, useEffect } from 'react'
import axios from 'axios'
import AppBar from '@mui/material/AppBar'

import packageJson from "../package.json"

function Footer() {
  const [lastUpdated, updateLastUpdated] = useState(new Date());

  const getLastUpdate = async () => {
    const url = `https://api.github.com/repos/${packageJson.owner}/${packageJson.repository}/branches/${packageJson.branch}`
    axios.get(url) 
      .then((response) => {
        const commitDate = response.data.commit.commit.author.date

        if (!commitDate) return

        updateLastUpdated(new Date(commitDate));
      })
  }

  useEffect(() => {
    getLastUpdate();
  }, [])

  return (
    <div style={{ 
        backgroundColor: "rgb(230, 230, 230)", 
        padding: "20px 0px", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center",
        color: "rgb(120, 120, 120)"
    }}>
      <div>
        &copy; {new Date().getFullYear()}, Marcus Peh 
      </div>
      <div style={{ margin: "0 10px"}}> 
        |
      </div>
      <div>
        Last Updated: {lastUpdated.toDateString()}
      </div>
    </div>
  )
}

export default Footer