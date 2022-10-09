import React, { Component } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
      <div>
        <Container bsPrefix="home">
          <div className="title">
            <h1>andrew</h1>
            <h1>robert</h1>
            <h1>ralston</h1>
            <h1>cole</h1>
          </div>
          <ProjectGraph/>
        </Container>
      </div>
    )
  }

}

export default Home
