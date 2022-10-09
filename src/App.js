import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './components/Pages/home';
import About from './components/Pages/about';
// import Portfolio from './components/Pages/portfolio';

// import styling
import './App.css';
import './components/common/header.css';
import './components/common/footer.css';

// import components
import Header from './components/Header/Header';
import BackgroundText from './components/BackgroundGraphic/BackgroundText';
import NotFound from './components/Pages/NotFound';




class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <BackgroundText/>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
