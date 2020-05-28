import React, { Component} from 'react';


// import modules

import Header from './components/header';
import Accordion from './components/accordion';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <div className="main-wrapper">
          <div className="row">
            <div className="col-25">
              <Accordion
                title="ABOUT"
                content="With a background in Architecture, I found myself augmenting my career at every step with the use of technology. From Parametric 3D design to defacto Data Analyst, I have not let the fear of doing something differently prevent me from asking if there is a better way. Equipped with a caffeine addiction only architecture school could have provided, I try to ask why we do the things we do and bring empathy into my stories of data visualization." />
              <Accordion
                title="EDU"
                content="Filler Text Lorem Ipsum Io. " />
              <Accordion
                title="CONTACT"
                content="andrew.rr.cole@gmail.com" />
            </div>
            <div className='col-75'>
            </div>
          </div>


  
        </div>
        </div>
    );
  }

}

export default App;
