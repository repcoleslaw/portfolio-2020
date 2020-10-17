import React from 'react'

import './resume.css';

import Popup from 'reactjs-popup';

function architectResume() {
  return (
    <div>
      <div>
        <h2 className="resume-h1">product design & ui/ux</h2>
        <hr/>
        <p className="resume-intro">User experience and empathetic design strategies are at the core of most questions when interrogating how somebody interacts with something. Whether that is space, displays, applications, or information; accessibilty and clarity of intent are transferable skills that I have a had the opportunity to deploy. A collection of freelance projects as a Product Consultant has allowed me to build a decent range of product development experience.</p>
      </div>
      <div>
        <h3>wireframes</h3>
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
