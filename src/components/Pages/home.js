import React, { Component } from 'react';
import { Box } from '@mui/material';

//import component
import PortfolioGraph from '../PortfolioGraph/PortfolioGraph';

const style = {
  background:"#eee",
  position:"fixed",
  top:"0",
  zIndex:"0",
  height:"100vh",
  width:"100vw"
}

class Home extends Component {

  state = {
    network: "all"
  }

 componentWillUnmount(){
   console.log("unmounting")
 }

  render() {
    return (
        <Box sx={style}>
          
          <PortfolioGraph sx={{zIndex:"300"}}/>
          
        </Box>
    )
  }

}

export default Home
