import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Popup from 'reactjs-popup';
import Modal from './components/common/modal';


// import pages
import Home from './components/Pages/home';
import Gallery from './components/Pages/gallery';

// import styling
import './App.css';
import './components/common/header.css';
import './components/common/footer.css';


//import assets
import logo from './assets/logo.png';



class App extends Component {



  render() {
    return (
      <div className="App">
        <Router>
          <div className='page-wrapper'>
            <div className='content-inside'>
              <Container bsPrefix="header">
                <div className='nav-bar'>
                  <div className="nav">
                    <div className="nav-top">
                      <img className='nav-logo' src={logo} alt='logo'></img>
                      <h1 id="header_name">andrew.rr.cole</h1>
                    </div>
                    <div className="nav-bottom">
                      <ul id="sub-menu">
                        <li><Link to={'/'} className="nav-link">home</Link></li>
                        {/* <li><Link to={'/gallery'} className="nav-link">gallery</Link></li> */}
                        <Popup trigger={<li className="nav-link">contact</li>}
                              modal
                              closeOnDocumentClick>
                            <Modal/>
                          </Popup>
                      </ul>
                    </div>
                  </div>
                  <div className='nav-accent'></div>
                </div>
              </Container>
              <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route exact path='/gallery' component={Gallery} /> */}
              </Switch>
            {/*close content container*/}
            </div>
            {/* Footer Section */}
            <div className='foot-bar'>
              <div className='foot-accent'></div>
              <div className='foot-container'>
                <div className='foot-column'>
                  <p className="vertical-quote" id="changetag"></p>
                  <ul>
                    <li><Link className="foot-link" to={'/'}>home</Link></li>
                    {/* <li><Link className="foot-link" to={'/cv'}>cv</Link></li> */}
                    {/* <li><Link to={'/blog'}>blog</Link></li> */}
                  </ul>
                </div>
              </div>
              <p id="copymark">arrcole © 2020</p>
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
