import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// bootstrap imports
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';



import Popup from 'reactjs-popup';
import Modal from './components/Contact/modal';
import AlertDismissibleExample from './components/common/alertpopup';


// import pages
import Home from './components/Pages/home';
import About from './components/Pages/about';


// import styling
import './App.css';
import './components/Header/header.css';
// import './components/common/footer.css';




class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <div className='page-wrapper'>
            <div className='content-inside'>
              <Container bsPrefix="header">
                <Row>
                <div><p className="nav-logo">[a]</p></div>

                <div className="nav-bar">
                    <Link to={'/'} className="nav-link">HOME</Link>
                    <Link to={'/about'} className="nav-link">ABOUT</Link>
                    {/* <Link to={'/portfolio'} className="nav-link">PORTFOLIO</Link> */}
                    <Popup trigger={<a href="#" className="nav-link">CONTACT</a>}
                      modal
                      closeOnDocumentClick>
                    <Modal/>
                  </Popup>
                </div>
                </Row>
              </Container>

              <Routes>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                {/* <Route exact path='/portfolio' component={Portfolio} /> */}
              </Routes>
            {/*close content container*/}
            <AlertDismissibleExample></AlertDismissibleExample>
            </div>
           

            {/* closing page wrapper */}
          </div>
        </Router>

        {/* closing app */}
      </div>
    );
  }

}

export default App;
