import React, { Component } from 'react'

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import other deps
import Socials from '../common/socials'


class Work extends Component {



  render() {
    return (
      <div>
        {/* First Section */}
        <Container>
          <Row bsPrefix="splash">
            <Col>
              <div className="vertical-text">
                <p className="vertical-quote">designer</p>
                <p className="vertical-quote">problem-solver</p>
                <p className="vertical-quote">data-storyteller</p>
                <h1>thoughts</h1>
              </div>
            </Col>
            <Col>
              work in progress
                    the current n
              {/* <Graphvis/> */}
            </Col>
            <Col>third column</Col>

            
          </Row>
        </Container>
        {/* Second Section */}
        <Container>
          <Row>
            <Col><Socials/></Col>
            <Col></Col>
            <Col>
              <hr />
              <p>
              If it is not obvious, the site is under construction.
              Surely I can think of a better use of a personal website thatn juse a copy+paste of information you'd find in a fixed resume. </p>
            </Col>
          </Row>
        </Container>


      </div>
    )
  }

}

export default Work
