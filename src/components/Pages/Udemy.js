import React, { useState } from 'react';


import BarGraphWrapper from './d3-viz/BarGraphWrapper';
import Dropdown from 'react-bootstrap/Dropdown'



function Udemy() {

  const [dataName, setData] = useState('men');



  return (
    <div>
      <div>
      <Dropdown>
        <Dropdown.Toggle variant="Primary" id="dropdown-basic">
          Choose a Dataset
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={()=>setData('men')}>Men</Dropdown.Item>
          <Dropdown.Item onSelect={()=>setData('women')}>Women</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </div>
      <BarGraphWrapper dataName={dataName}/>
    </div>
  )
  
}

export default Udemy
