import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import other deps

import Socials from '../common/socials';

//import style
import '../../App.css'



class Work extends Component {



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
                <h1>gallery</h1>
              </div>
            </Col>
            <Col>
            <h3>About</h3>
            <p id="justified">Hi there, my name is <span id="highlight">Andrew</span>, and I am pleased you decided to spend some clicks here today! My odd exploration of self sits on the home page - but if you're on this side of the site, you might be looking for some more direct asnwers.</p>
            <p>You can always reach out to me directly at <span id="highlight">andrew.rr.cole@gmail.com</span>, and all my socials fall under <span id="highlight">@arrcole</span>.</p>
            
            <h3>Education</h3>
            <hr></hr>
            <div id="CV-row">
            
              <Col id="CV-Card">
                <h4>Masters of Architecture</h4>
                <p id="sub-title">Cambridge, Ontario - 2017</p>
                <h5>University of Waterloo</h5>
                <p>A thesis-driven program in which studied infrastructure and urban plannings relationship through the design of a Toronto Rail Deck Park proposal. <a target="_blank" rel="noopener noreferrer" href="https://uwspace.uwaterloo.ca/handle/10012/11877">Here is a link to the thesis.</a></p>
                <p>During my time in the graduate studies I also helped with student initiatives such as BRIDGE and F_RMLab, a student gallery  and digital fabrication initiative respectively.</p>
              </Col>
              <Col id="CV-Card">
                <h4>B. Architectural Studies</h4>
                <p id="sub-title">Cambridge, Ontario - 2015</p>
                <h5>University of Waterloo</h5>
                <p>A 5-year Co-op program that alternated between studies and work experience. These working semesters had internships at firms in Toronto and London UK.</p>
                <p>Some of the undergrad project work is fun to keep tinkering on in the portfolio, other experiences worth noting was working with ACADIA2013 and co-operating one of the more popular social venues in Cambridge.</p>
              </Col>
              
            </div>
            <h3>Experience</h3>
            <hr></hr>
            </Col>

   
          </Row>
        </Container>
        {/* Second Section */}
        <Container>
          <Row>
            <Col md={4}><Socials/></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
       
        {/* third Section */}
        <Container>
          <Row>
            <Col md={4}>
              <hr/>
              <p>
              A not-so-linear approach to the composition of what builds up my interests, projects, and career. A human life is complicated, the first diagram isn't to tone that down. If you want a filtered look, I've got some other drawings.</p></Col>
            
            <Col>
              <div className="Other-Maps">

              </div>
              
              
            </Col>
          </Row>
        </Container>



      </div>
    )
  }

}

export default Work
