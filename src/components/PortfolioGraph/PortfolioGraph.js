import React from 'react'
import Graph from "react-graph-vis";
import { projectData } from './projects';
import { graphOptions } from './graphOptions';
import { Box } from '@mui/material';


function ProjectGraph() {

    const style = {
      position:"fixed",
      top:"0",
      width:"100vw",
      height:"100vh"
  }

  return (
    <Box>
      <Graph graph={projectData.graph} options={graphOptions.options} style={style}/>
    </Box>
  )
}

export default ProjectGraph