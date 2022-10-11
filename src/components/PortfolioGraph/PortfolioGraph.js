import React from 'react'
import Graph from "react-graph-vis";
import { projectData } from './projects';
import { graphOptions } from './graphOptions';
import { Box } from '@mui/material';


function ProjectGraph() {

    const style = {
      position:"fixed",
      top:"0",
      height:"100vh",
      width:"100vw",
      margin:"0",
      padding:"0"

  }

  return (
    <Box>
      <Graph graph={projectData.graph} options={graphOptions.options} style={style}/>
    </Box>
  )
}

export default ProjectGraph