import React from 'react'
import './social.css'

import Popup from 'reactjs-popup';
import Modal from '../common/modal';

// import assets
import connect from '../../assets/icons8-connect.svg';
import insta from '../../assets/icons8-instagram.svg';
import linkedin from '../../assets/icons8-linkedin.svg';
import pinterest from '../../assets/icons8-pinterest.svg';


function Socials() {
  return (

      <div className="social-container">
                <Popup 
                trigger={<button id="socialbutton"><img className="social-icon" alt="connect" src={connect}/></button>} 
                modal
                closeOnDocumentClick
                >
                  <Modal/>
                  </Popup>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrewrrcole/"><img className="social-icon" alt="linkedin" src={linkedin} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arrcole/"><img className="social-icon" alt="instagram" src={insta} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.ca/andrewcole58/boards/"><img className="social-icon" alt="pinterest" src={pinterest} /></a>
              </div>

  )
}

export default Socials
