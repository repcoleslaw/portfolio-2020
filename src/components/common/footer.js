import React, { Component } from 'react'

// import styles

import './footer.css'

export class Footer extends Component {
  render() {
    return (
      <div className='foot-bar'>
        <div className='foot-accent'></div>
        <div className='foot-container'>
          <div className='foot-column'>

            <p className="vertical-quote" id="changetag">back to top</p>
            <ul>
              <li>work</li>
              <li>blog</li>
              <li>contact</li>
            </ul>


            

          </div>

        </div>
        <p id="copymark">arrcole © 2020</p>  

      </div>
    )
  }
}

export default Footer
