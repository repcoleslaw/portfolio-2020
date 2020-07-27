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
        <img src={linkedIn} alt="linkedIn"></img>
        <img src={instagram} alt="instagram"></img>
        <img src={pinterest} alt="pinterest"></img>
        <img src={twitter} alt="twitter"></img>
        <p className="modal-text">or add me on socials, I follow back.</p>
      </div>
      </div>

      
    </div>
  )
}

export default Modal
