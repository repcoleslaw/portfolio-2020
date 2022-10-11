import React, { Component } from 'react';
import {Box} from '@mui/material';

//import other deps

//import style
import '../../App.css'
import ProjectGraph from '../PortfolioGraph/PortfolioGraph';


class Home extends Component {

  state = {
    network: "all"
  }

 componentWillUnmount(){
   console.log("unmounting")
 }

  render() {
    return (
      <Box>
          <ProjectGraph/>
      </Box>
    )
  }

}

export default Home
