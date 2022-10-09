import React, { Component } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// mui imports
import {Grid, Box, Typography, Button} from "@mui/material"

//import other deps
import ArchResume from './resumes/architectResume';
import DataResume from './resumes/dataResume';
import ProdResume from './resumes/prodResume';
//import style
import '../../App.css';

const tempStyle={
  border:"1px solid red"
}

const headerStyle = {
  borderTop:"1px solid lightgrey",
  borderBottom:"1px solid lightgrey",
  padding:"1rem 0"
}

const buttonStyle={
  margin:"0 1rem"
}

class About extends Component {

  state = {
    arch: false,
    data: false,
    prod: false,
  }

  render() {
    return (
      <div>
        <Grid sx={headerStyle} container justifyContent="center">
          <Grid item sx={tempStyle} >
            <Button sx={buttonStyle} defaultValue className='neubutton'>product</Button>
            <Button sx={buttonStyle} defaultValue className='neubutton'>data</Button>
            <Button sx={buttonStyle} defaultValue className='neubutton'>architecture</Button>
            <Button sx={buttonStyle} defaultValue className='neubutton'>complete cv</Button>
            <Button sx={buttonStyle} defaultValue className='neubutton'>x</Button>
          </Grid>
        </Grid>
        <Grid container sx={tempStyle}>
            <div className="resume-container">
              {this.state.arch ? <ArchResume/> : null}
              {this.state.data ? <DataResume/> : null}
              {this.state.prod ? <ProdResume/> : null}
            </div>
        </Grid>
        {/* First Section */}
        <Container bsPrefix="home">
          {/* <Row bsPrefix="splash">
              <div className="introduction">
              <button className="neubutton" onClick={()=>this.setState({data: false, arch: true, prod: false})}>architect</button>
              <button className="neubutton" onClick={()=>this.setState({data: true, arch: false, prod: false})}>data</button>
              <button className="neubutton" onClick={()=>this.setState({data: false, arch: false, prod: false})}>cv</button>
              <button className="neubutton" onClick={()=>this.setState({data: false, arch: false, prod: true})}>product design</button>
              <button className="neubutton" onClick={()=>this.setState({data: false, arch: false, prod: false})}>(x)</button>
              <hr/>
              </div>
          </Row> */}
         {/* <Row>
           <Col>
           <div className="resume-container">
              {this.state.arch ? <ArchResume/> : null}
              {this.state.data ? <DataResume/> : null}
              {this.state.prod ? <ProdResume/> : null}
            </div>
           </Col>
         </Row> */}
        </Container>
 


      </div>
    )
  }

}

export default About
