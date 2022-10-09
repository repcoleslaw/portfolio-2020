import React, { Component } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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

              <div className="title">
              <h1>andrew</h1>
              <h1>robert</h1>
              <h1>ralston</h1>
              <h1>cole</h1>
              </div>
              <Graphvis/>
          <Row id="socials">
       
          <a href="https://www.linkedin.com/in/andrewrrcole/" target="_blank" rel="noopener noreferrer"><h3>Li</h3></a>
          <a href="https://twitter.com/arrcole" target="_blank" rel="noopener noreferrer"><h3>Tw</h3></a>
          <a href="https://www.behance.net/andrewrrco097b" target="_blank" rel="noopener noreferrer"><h3>Bē</h3></a>
          <a href="https://www.instagram.com/arrcole/" target="_blank" rel="noopener noreferrer"><h3>Ig</h3></a>


          </Row>


        </Container>
 


      </div>
    )
  }

}

export default Home
