import React from 'react'

import './network.css';


export default function NetworkSelector({network}){

    return (
      <div className="networkLegend">
        <div>
        <p className="subtext">
                  A non-linear exploration of self; documentation of career highs and lows, interests and biases, and other thoughts.</p>
                  <hr />
                  <hr />
        </div>
        <button onClick={() => network("all")}>all</button>
        <button onClick={() => network("data viz")}>data viz</button>
        <button onClick={() => network("architecture")}>architecture</button>
        <button onClick={() => network("products")}>products</button>
        <button onClick={() => network("hobbies")}>hobbies</button>
        <button onClick={() => network("odd-jobs")}>odd-jobs</button>
        <button onClick={() => network("education")}>education</button>
        <button onClick={() => network("volunteer")}>volunteer</button>


      </div>
    )
}


