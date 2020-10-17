import React, { Component } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import other deps
// import Socials from '../common/socials';
import Graphvis from './d3-viz/graphvis';

//import style
import '../../App.css'


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
        {/* First Section */}
        <Container bsPrefix="home">
          <Row bsPrefix="splash">
          <Col md={2}>
              <div className="vertical-text">
                <p className="vertical-quote">designer, problem-solver, data-storyteller</p>
                <h1>PORTFOLIO</h1>
              </div>
            </Col>
            <Col md={1}>
              WIP
            </Col>
            <Col md={8}>
              <div className="title">
              <h1>andrew</h1>
              <h1>robert</h1>
              <h1>ralston</h1>
              <h1>cole</h1>
              </div>
              <Graphvis/>
            </Col>     
          </Row>
        </Container>
 


      </div>
    )
  }

}

export default Home
