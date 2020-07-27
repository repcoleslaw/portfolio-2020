import React, { Component } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import other deps
import Socials from '../common/socials';
import Graphvis from './d3-viz/graphvis';
import Timeline from './d3-viz/timeline';

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
        <Container>
          <Row bsPrefix="splash">
            <Col md={4}>
              <div className="vertical-text">
                <p className="vertical-quote">designer</p>
                <p className="vertical-quote">problem-solver</p>
                <p className="vertical-quote">data-storyteller</p>
                <h1>Visual resumé</h1>
              </div>
            </Col>
            <Col>
              <Graphvis/>
            </Col>     
          </Row>
        </Container>
        {/* Second Section */}
        <Container>
          <Row>
            <Col md={4}><Socials/></Col>
            <Col></Col>
            <Col >
            <p>
              Individuality is a complicated thing to map; I have a background in architecture, a passion for product design, and I like data visualization. This portfolio site is more of an expirement of self then a traditional digital resumé.</p>
              <p>
              [Above]: a not-so-linear approach to the composition of what builds up my interests, projects, and career. Network library using vis.js in React</p>
              
              
            </Col>
          </Row>
        </Container>
        {/* DotDivider */}
        <Container>
          <Row>
            <Col md={4} id="dark">
              <h2>-</h2>
              <p id="sub-title">let's get diagrammatic</p>
              </Col>
            <Col id="dotfill"></Col>
          </Row>

        </Container>
        {/* 4th Section */}
        <Container>
          <Row>
            <Col>
             <Timeline></Timeline>
            </Col>
            <Col md={4}><p>
             I have a Masters of Architecture, a Bachelors of Architectural Studies, and too many Udemy courses 90% complete. I try to sort my experiences between things I have <span id="personal">personally driven</span> and <span id="external"> professional opportunities</span>  working with others. The combination of experiences makes an interesting timeline of growth.</p>
             <p>
             [Left] a selff gantt timeline. I will continue to update this dataset with more detail. D3.js in React.  </p></Col>
            
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col></Col>
          </Row>
        </Container>



      </div>
    )
  }

}

export default Home
