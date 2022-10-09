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
      <div id="socials">
      <a href="https://www.linkedin.com/in/andrewrrcole/" target="_blank" rel="noopener noreferrer"><h3>Li</h3></a>
          <a href="https://twitter.com/arrcole" target="_blank" rel="noopener noreferrer"><h3>Tw</h3></a>
          <a href="https://www.behance.net/andrewrrco097b" target="_blank" rel="noopener noreferrer"><h3>Bē</h3></a>
          <a href="https://www.instagram.com/arrcole/" target="_blank" rel="noopener noreferrer"><h3>Ig</h3></a>
        <p className="modal-text">or add me on socials, I follow back.</p>
      </div>
      </div>

      
    </div>
  )
}

export default Modal
