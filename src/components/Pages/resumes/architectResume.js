import React from 'react'

import './resume.css';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Popup from 'reactjs-popup';


//portfolio imports


function architectResume() {
  return (
    <div>
      <div>
        <h2 className="resume-h1">architect, design, digital practice</h2>
        <hr/>
        <p className="resume-intro">I have nearly 10 years of AEC related experience; accumulated in trade-work, co-op education workplacements, two architectural degrees, and professional opportunities. I have brought a variety of digital tools to my architecture work, and continually try to stay in touch with what changes are in the process landscape.</p>
        <p>I have some portfolio scattered here and there, some pieces I'm more proud of are currently still on-going and can't be published.</p>
      </div>      
      <div >
        <h3>m.arch thesis</h3>
        <p>September 2015 - April 2017</p>
        <div>Img</div>
        <Popup trigger={<button href="#" className="neubutton">more +</button>}
                      modal
                      closeOnDocumentClick>
          <div className="portfolioPopup">
            <h3>The Reflexive Urban Farbic: The Toronto Rail Deck Park</h3>
            <p>M.Arch - University of Waterloo - Cambridge, Ontario.</p>
            <p>ABSTRACT:</p>
            <p>The thesis The Reflexive Urban Fabric: An Investigation of Toronto’s Rail Corridor is concerned with architecture’s role in shaping infrastructural systems into designed composite networks that respond to local, social, and ecological conditions. Infrastructural systems present a dichotomy between the technical and cultural influences that are inseparable from urban planning. They have been given technical priority over natural and urban landscapes for an agenda of higher mono-focused productivity, while also shaping urban fabrics in relation and interactions to the supplies with which infrastructural systems provide. Through the acknowledgement of historical development within downtown Toronto, the infrastructural interventions of past eras have generated spatial conditions that currently constrict the desires of potential urban growth.</p>

            <button className="neubutton"><a href="https://uwspace.uwaterloo.ca/handle/10012/11877" target="_blank" rel="noopener noreferrer">Link to Thesis!</a></button>
          </div>
        </Popup>
      </div>

    </div>

  )
}

export default architectResume
