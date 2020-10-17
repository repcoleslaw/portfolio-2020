import React, { useState } from 'react'

import Alert from 'react-bootstrap/Alert';

import './alertpopup.css'


function AlertDismissibleExample() {
  const [show, setShow] = useState(true);


  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dimissible bsPrefix="mobile-alert">
        <Alert.Heading>Nice phone!<span onClick={()=>setShow(false)}>x</span></Alert.Heading>
        
        <p>
          I'm playing with a few different front-end libraries on this website, and I'm not a CSS expert yet, so mobile scaling could be a yikes. For the best viewing experience try checking this out on something with a larger screen!
        </p>
      </Alert>
    );
  }
  return <div>
    <p onClick={()=>setShow(true)} className="mobile-footer">a mobile reminder</p>
  </div>;
}


export default AlertDismissibleExample
