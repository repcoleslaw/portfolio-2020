import React, {Component} from 'react';
import { 
  Link,
  Route,
  Switch } from 'react-router-dom';



// import styles
import './common.css'

// import assets

import logo from '../assets/logo.png'


class header extends Component{
  render(){
    return(
      <div className='nav-bar'>
        <div className="nav-menu">
          <img className='nav-logo' src={logo} alt='logo'></img>
          <ul className='nav-titles'>
            <li>designer</li>
            <li>problem-solver</li>
            <li>data story-teller</li>


          </ul>
          <h1>andrew rr cole</h1>

        </div>
        <div className='nav-accent'></div>
      </div>
      
    )
  }
}
export default header;