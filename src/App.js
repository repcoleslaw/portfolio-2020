import React, { Component } from 'react';
import Graph from "react-graph-vis";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/common/header';
import Footer from './components/common/footer';

import NetworkSelector from './components/Pages/d3-viz/networkSelector';
import ChartWrapper from './components/Pages/d3-viz/ChartWrapper';


// import styling
import './App.css';


//import assets
import connect from './assets/icons8-connect.svg';
import insta from './assets/icons8-instagram.svg';
import linkedin from './assets/icons8-linkedin.svg';
import pinterest from './assets/icons8-pinterest.svg';




class App extends Component {

  state = {
    network: "all"
  }

  // update network statemethod
  networkSelected = (network) => {
    this.setState({ network: network });
  };


  render() {
    return (
      <div className="App">
        <div className='page-wrapper'>
          <div className='content-inside'>
            <Container bsPrefix="header">
              <Header />
            </Container>
            {/* First Section */}
            <Container>
              <Row>
                <Col bsPrefix="sidebar">
                  <div className="vertical-text">
                    <p className="vertical-quote">designer</p>
                    <p className="vertical-quote">problem-solver</p>
                    <p className="vertical-quote">data-storyteller</p>
                    <h1>diagrammatic</h1>

                  </div>

                  <div className="social-container">
                    <a href="#"><img className="social-icon" alt="connect" src={connect} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrewrrcole/"><img className="social-icon" alt="linkedin" src={linkedin} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arrcole/"><img className="social-icon" alt="instagram" src={insta} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.ca/andrewcole58/boards/"><img className="social-icon" alt="pinterest" src={pinterest} /></a>
                  </div>

                </Col>
                <Col bsPrefix="main">
                  work in progress
                  the current network is {this.state.network}
                  <ChartWrapper/>
                </Col>

                <NetworkSelector network={this.networkSelected} />
              </Row>
            </Container>
            {/* Second Section */}
            <Container>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                  <hr /><p>
                    If it is not obvious, the site is under construction.
                    Surely I can think of a better use of a personal website thatn juse a copy+paste of information you'd find in a fixed resume. </p>
                </Col>
              </Row>
            </Container>


            {/*close content container*/}
          </div>
          {/* Footer Section */}
          <Footer />
          {/* closing page wrapper */}
        </div>

        {/* closing app */}
      </div>
    );
  }

}

export default App;
