import React, {Component} from 'react';


// import styles
import './header.css'

// import assets

import logo from '../../assets/logo.png'


class header extends Component{
  render(){
    return(
      <div className='nav-bar'>
        <div className="nav">
          <div className="nav-top">
            <img className='nav-logo' src={logo} alt='logo'></img>
            <h1 id="header_name">andrew.rr.cole</h1>
          </div>
          
          <div className="nav-bottom">

            <ul id="sub-menu">
              <li>work</li>
              <li>blog</li>
              <li>contact</li>
            </ul>
          </div>

        </div>

        <div className='nav-accent'></div>
      </div>
      
    )
  }
}
export default header;