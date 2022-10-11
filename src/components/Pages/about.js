import React, { Component } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import other deps
import ArchResume from './resumes/architectResume';
import DataResume from './resumes/dataResume';
import ProdResume from './resumes/prodResume';


//import style
import '../../App.css';


class About extends Component {

  state = {
    arch: false,
    data: false,
    prod: false,
  }

 componentWillUnmount(){
   console.log("unmounting")
 }

 handleClick(){

 }

  render() {
    return (
      <div>
        {/* First Section */}
        <Container bsPrefix="home">
          <Row bsPrefix="splash">



              <div className="title">
              <h1>andrew</h1>
              <h1>robert</h1>
              <h1>ralston</h1>
              <h1>cole</h1>
              </div>

              <div className="introduction">
                <p>
                  I have been finding it an increasingly difficult thing to describe myself professionally. With a Bachelors of Architectural Studies and a Masters of Architecture from the University of Waterloo, I found myself augmenting my career at every step with the use of technology. Equipped with a caffeine addiction only architecture school could have provided, I ask why things are, challenge process, and not hide away from learning something new. I believe every problem requires a solution that is well-designed, and try to look for opportunities to deploy that mentality.
                </p>
              <p>
                I have decided to have a few highlight reels populated depending on what you are looking for. For something more thorough, please feel free to reach out to me!
              </p>
              <button className="neubutton" onClick={()=>this.setState({data: false, arch: true, prod: false})}>architect</button>
              <button className="neubutton" onClick={()=>this.setState({data: true, arch: false, prod: false})}>data</button>
              <button className="neubutton" onClick={()=>this.setState({data: false, arch: false, prod: true})}>product design</button>
            <hr/>
              </div>




          </Row>


         <Row>
           <Col>
           <div className="resume-container">
              {this.state.arch ? <ArchResume/> : null}
              {this.state.data ? <DataResume/> : null}
              {this.state.prod ? <ProdResume/> : null}
            </div>
           </Col>
         
         </Row>


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

export default About
