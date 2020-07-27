import React from 'react'
import './modal.css';

import linkedIn from '../../assets/icons8-linkedin.svg'
import instagram from '../../assets/icons8-instagram.svg'
import pinterest from '../../assets/icons8-pinterest.svg'
import twitter from '../../assets/icons8-twitter.svg'

function Modal() {
  return (
    <div className="modal-background">
      <div className="modal-container">
      <span className="modal-email">andrew.rr.cole@gmail.com</span>
      <p className="modal-text">email me, maybe.</p>

      <hr/>
      <div id="modal-socials">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrewrrcole/"><img className="social-icon" alt="linkedin" src={linkedIn} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arrcole/"><img className="social-icon" alt="instagram" src={instagram} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.ca/andrewcole58/boards/"><img className="social-icon" alt="pinterest" src={pinterest} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/arrcole"><img className="social-icon" alt="pinterest" src={twitter} /></a>
        <p className="modal-text">or add me on socials, I follow back.</p>
      </div>
      </div>

      
    </div>
  )
}

export default Modal
