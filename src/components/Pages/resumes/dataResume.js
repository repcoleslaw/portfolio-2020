import React from 'react'

import './resume.css';

import Popup from 'reactjs-popup';

function dataResume() {
  return (
    <div >
      <div>
      <h2 className="resume-h1">data-story teller and diagrams</h2>
      <hr/>

        <p className="resume-intro">Throughout the M.Arch and B.A.S, you need to be able to visually communicate compelling narratives. Those narratives only get more exciting with maps and data supporting it. After completing a variety of online-course work to learn SQL, javascript, GIS, and PowerBI, I became a resident Architectural Data Analyst at Stantec. In that position, I built BI dashboards, client report web-applications, and managed largescale spatial asset databases in SQL.</p>

        <p>I also do a few data visuals for fun.</p> 


      </div>
      
      <div>
        <h3>maps</h3>

        <div>Img</div>
        <Popup trigger={<button href="#" className="neubutton">more +</button>}
                      modal
                      closeOnDocumentClick>
                    <div className="portfolioPopup">
                      <h3>The Reflexive Urban Farbic: The Toronto Rail Deck Park</h3>
                      <p>ABSTRACT:</p>
                      <p>The thesis The Reflexive Urban Fabric: An Investigation of Toronto’s Rail Corridor is concerned with architecture’s role in shaping infrastructural systems into designed composite networks that respond to local, social, and ecological conditions. Infrastructural systems present a dichotomy between the technical and cultural influences that are inseparable from urban planning. They have been given technical priority over natural and urban landscapes for an agenda of higher mono-focused productivity, while also shaping urban fabrics in relation and interactions to the supplies with which infrastructural systems provide. Through the acknowledgement of historical development within downtown Toronto, the infrastructural interventions of past eras have generated spatial conditions that currently constrict the desires of potential urban growth.</p>

                      <button className="neubutton"><a href="https://uwspace.uwaterloo.ca/handle/10012/11877" target="_blank" rel="noopener noreferrer">Link to Thesis!</a></button>
                    </div>
                  </Popup>
      </div>

    </div>

  )
}

export default dataResume
