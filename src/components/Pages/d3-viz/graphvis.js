import React, { Component } from 'react'
 
import Graph from "react-graph-vis";

import './network.css';


class Graphvis extends Component {
  
  state = {
    graph:{
      nodes:[
        { id: 0, label: "[a]", group: 'myCore', value: 50 },
  
        { id: 1, label: "Architecture", group: 'Categories', value: 50 },
        { id: 2, label: "Data Viz", group: 'Categories', value: 50 },
        { id: 3, label: "Product Design", group: 'Categories', value: 50 },
        { id: 4, label: "Interests", group: 'Categories', value: 60 },
  
        { id: 100, label: "B.A.S", group: "Role", value: 30 },
        { id: 101, label: "M.Arch", group: "Role", value: 30 },
        { id: 102, label: "BRIDGE", group: "Company", value: 25 },
        { id: 103, label: "F_RMLab", group: "Company", value: 25 },
        { id: 104, label: "Arch.Intern", group: "Role", value: 25 },
        { id: 105, label: "Renderer", group: "Role", value: 25 },
        { id: 106, label: "Architectural Data Analyst", group: "Role", value: 25 },
        { id: 107, label: "DBEI Committee Member", group: "Role", value: 25 },
        { id: 108, label: "Front-End Dev", group: "Role", value: 25 },
  
        { id: 200, label: "Toronto Rail Deck Park", group: "eduProject", value: 25 },
        { id: 201, label: "Dreki Spa", group: "eduProject", value: 10 },
        { id: 202, label: "Rattlesnake Point", group: "eduProject", value: 10 },
        { id: 203, label: "Museo Roma", group: "eduProject", value: 10},
        { id: 204, label: "C_BE", group: "eduProject", value: 10 },
        
        { id: 300, label: "SickKids", group: "project", value: 25 },
        { id: 301, label: "UHN", group: "project", value: 25 },
        { id: 302, label: "Sinai Health System", group: "project", value: 25 },
        { id: 303, label: "Calgary Cancer Centre", group: "project", value: 25 },
        { id: 304, label: "KMCWC", group: "project", value: 25 },
        { id: 305, label: "Madison Square Gardens", group: "project", value: 25 },
        { id: 306, label: "LA Forum", group: "project", value: 25 },
        { id: 307, label: "NYC Stadium Feasibility", group: "project", value: 25 },
        { id: 308, label: "Bruce Power", group: "project", value: 25 },
        { id: 309, label: "Brockley Residential", group: "project", value: 25 },
        { id: 310, label: "Vauxhall BID", group: "project", value: 25 },
        { id: 311, label: "Malta Hospital", group: "project", value: 25 },
        { id: 312, label: "Autocase", group: 'project', value: 25 },
        { id: 313, label: "Revlo", group: 'project', value: 25 },
        { id: 314, label: "This.Dot", group: 'project', value: 25 },
        { id: 315, label: "Neurobody", group: 'project', value: 25 },
        
        { id: 400, label: "3DM Kit", group: 'myTools', value: 25 },
        { id: 401, label: "Grasshopper", group: 'myTools', value: 25 },
        { id: 402, label: "Revit", group: "myTools", value: 35 },
        { id: 403, label: "SQL", group: "myTools", value: 25 },
        { id: 404, label: "javascript", group: "myTools", value: 35 },
        { id: 405, label: "HTML", group: "myTools", value: 25 },
        { id: 406, label: "GIS", group: 'myTools', value: 25 },
        { id: 407, label: "Sketch-Up", group: 'myTools', value: 25 },
        { id: 408, label: "PowerBI", group: 'myTools', value: 25 },
        { id: 409, label: "D3.js", group: 'myTools', value: 25 },
        { id: 410, label: "React.js", group: 'myTools', value: 25 },
        { id: 411, label: "Rhino", group: 'myTools', value: 25 },
        { id: 412, label: "Figma", group: 'myTools', value: 25 },
        { id: 413, label: "Illustrator", group: 'myTools', value: 25 },
        { id: 414, label: "Photoshop", group: 'myTools', value: 25 },
        { id: 415, label: "InDesign", group: 'myTools', value: 25 },
        { id: 416, label: "Graphic Kit", group: 'myTools', value: 25 },
  
  
        { id: 500, label: "3D Printing", group: 'Things', value: 25 },
        { id: 501, label: "Soccer", group: 'Things', value: 25 },
        { id: 502, label: "Hockey Goalie", group: 'Things', value: 25 },
        { id: 503, label: "Volleyball", group: 'Things', value: 25 },
        { id: 504, label: "Starcraft 2", group: 'Things', value: 25 },
        { id: 505, label: "Piano", group: 'Things', value: 25 },
  
  
        { id: 600, label: "BBB Architects", group: 'Company', value: 25 },
        { id: 601, label: "Foam Factor", group: 'Company', value: 25 },
        { id: 602, label: "Base Associates", group: 'Company', value: 25 },
        { id: 603, label: "Stantec", group: 'Company', value: 25 },
        { id: 604, label: "University of Waterloo", group: 'Company', value: 25 },
  
        { id: 700, label: "Toronto, CA", group: 'Where', value: 25 },
        { id: 701, label: "London, UK", group: 'Where', value: 25 },
        { id: 702, label: "Rome, ITA", group: 'Where', value: 25 },
        { id: 703, label: "Cambridge, CA", group: 'Where', value: 25 },
      ],
      edges: [
        // CORE TO MAIN HUBS
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
  
    // Arch to 
        //roles
    { from: 1, to: 100 },
    { from: 1, to: 101 },
    { from: 1, to: 102 },
    { from: 1, to: 103 },
    { from: 1, to: 104 },
    { from: 1, to: 105 },
    { from: 1, to: 106 },
    { from: 1, to: 107 },

    //dashed roles
    { from: 105, to: 104, dashes:[5,5]},
    { from: 104, to: 106, dashes:[5,5]},
    { from: 108, to: 2, dashes:[5,5]},
  
    // Roles to Companies
    { from: 104, to: 600 },
    { from: 105, to: 600 },
    { from: 104, to: 602 },
    { from: 104, to: 603 },
    { from: 106, to: 603 },
    { from: 100, to: 604 },
    { from: 101, to: 604 },
        //edu projects
  
    { from: 100, to: 201 },
    { from: 100, to: 202 },
    { from: 100, to: 203 },
    { from: 100, to: 204 },
    { from: 101, to: 200 },
  
    //projects to roles
    { from: 300, to: 104},
    { from: 301, to: 106 },
    { from: 302, to: 106 },
    { from: 303, to: 104 },
    { from: 305, to: 104 },
    { from: 306, to: 105 },
    { from: 307, to: 105 },
    { from: 308, to: 104 },
    { from: 309, to: 104 },
    { from: 310, to: 104 },
  
    //projects to product roles
    { from: 312, to: 3 },
    { from: 313, to: 3 },
    { from: 314, to: 3 },
    { from: 315, to: 3 },
  
  
    // Data Viz to roles
    { from: 2, to: 106 },
    { from: 2, to: 107 },

    //projects to Data viz
    { from: 301, to: 2 }, //UHN
    { from: 302, to: 2 },
    { from: 304, to: 2 },
    { from: 311, to: 2 },
  
  
    // Companies to Where
    { from: 700, to: 600 },
    { from: 700, to: 601 },
    { from: 701, to: 602 },
    { from: 700, to: 603 },
    { from: 702, to: 604 },
    { from: 703, to: 604 },
    { from: 604, to: 103, dashes:[5,5]},
    { from: 604, to: 102, dashes:[5,5]},
  
    //Tools to Toolset
    //Tools to 3DM
    { from: 401, to: 400 },
    { from: 402, to: 400 },
    { from: 407, to: 400 },
    { from: 411, to: 400 },
    { from: 400, to: 1 },
    { from: 400, to: 100 },
    { from: 400, to: 101 },
    { from: 400, to: 105 },
  
    //3dm dashed
    { from: 401, to: 411, dashes: [5, 5] },
    { from: 400, to: 2, dashes: [5, 5] },
  
    // Graphics
    { from: 412, to: 416 },
    { from: 413, to: 416 },
    { from: 414, to: 416 },
    { from: 415, to: 416 },

    //Graphic Roll Up
    { from: 416, to: 2 },
    { from: 416, to: 3 },
    { from: 416, to: 4 },
    //Tools to Dataviz
    { from: 403, to: 2 },
    { from: 404, to: 2 },
    { from: 406, to: 2 },
    { from: 408, to: 2 },
    { from: 409, to: 2 },
  
    // Tools Dashed
    { from: 404, to: 409, dashes: [5, 5] }, // js
    { from: 404, to: 410, dashes: [5, 5] },
    { from: 404, to: 405, dashes: [5, 5] },
    { from: 403, to: 408, dashes: [5, 5] }, // sql
    { from: 403, to: 406, dashes: [5, 5] }, // sql
  
    //Tools to Front End
    { from: 405, to: 108 },
    { from: 404, to: 108 },
    { from: 410, to: 108 },
    //Front End to Interests
    { from: 108, to: 4 },
    //hobbies to interests
    { from: 500, to: 4 },
    { from: 501, to: 4 },
    { from: 502, to: 4 },
    { from: 503, to: 4 },
    { from: 504, to: 4 },
    { from: 505, to: 4 },
      ]
    },
    options: {
      nodes: {
        shape: "dot",
        font: {
          size: 15,
          face: "Arial Narrow",
        },
        shadow: true,
      },
      edges: {
        width: 1,
        color: { inherit: "from" },
        smooth: true,
        shadow: true,
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -20,
          centralGravity: 0.0075,
          springLength: 50,
          springConstant: 0.18
        },
        maxVelocity: 80,
        solver: "forceAtlas2Based",
        timestep: 0.25,
        stabilization: { iterations: 50 }
      },
      interaction: {
        tooltipDelay: 150,
        hideEdgesOnDrag: false,
        hideEdgesOnZoom: true,
        hover: true,
        navigationButtons: true,
        keyboard: true,
      },
      groups: {
        myCore: {
          shape:"circle",
          size:15,
          color: {
            background: '#DA1C5C',
            border: '#DA1C5C',
            hover: {
              background: '#DA1C5C',
              border: '#DA1C5C',
              font:{
                color: '#DA1C5C',
              },
            },
            highlight: {
              border: '#DA1C5C',
              background: '#DA1C5C',
              font:{
                color: '#E2474B',
              },
            },
          },
          borderWidth: 2,
          font: {
            face: 'Arial Narrow',
            color: 'white',
            size: 24,
            align: "center",
            bold: true,
          },
        },
  
        project: {
          shape: "square",
          size:6,   
          color: {
            background: 'white',
            border: '#DA1C5C',
            highlight: {
              border: '#DA1C5C',
              background: 'white'
            },
            hover: {
              background: 'white',
              border: '#DA1C5C',
            },
          },
          borderWidth: 2,
          font: {
            face: 'Arial Narrow',
            color: '#111',
            size: 15,
          },
        },
  
        eduProject: {
          shape:"square",
          size:6,     
          color: {
            background: 'white',
            border: '#DA1C5C',
            highlight: {
              border: '#DA1C5C',
              background: 'white'
            },
            hover: {
              background: 'white',
              border: '#DA1C5C',
            },
          },
          borderWidth: 1,
          font: {
            face: 'Arial Narrow',
            color: '#111',
            size: 15,
          },
        },
    
        myTools: {
          shape:"dot",
          size: 6,
          color: {
            background: '#6CCBDB',
            border: '#6CCBDB',
            hover: {
              background: 'white',
              border: '#6CCBDB',
            },
            highlight: {
              border: '#6CCBDB',
              background: 'white'
            },
          },
          borderWidth: 1,
          font: {
            face: 'Arial Narrow',
            color: '#111',
            size: 18,
          },
        },
        
        Things: {
          size:6,
          color: {
            background: 'white',
            border: '#6CCBDB',
            hover: {
              background: 'white',
              border: '#6CCBDB',
            },
            highlight: {
              border: '#6CCBDB',
              background: 'white'
            },
          },
          borderWidth: 2,
          font: {
            face: 'Arial Narrow',
            color: '#111',
            size: 15,
          },
        },
        
        Role: {
          shape:"dot",
          size:15,
          color: {
            background: 'white',
            border: '#DA1C5C',
            hover: {
              background: 'white',
              border: '#DA1C5C',
            },
            highlight: {
              border: '#DA1C5C',
              background: 'white'
            },
          },
          borderWidth: 2,
          font: {
            face: 'Arial Narrow',
            color: '#111',
            size: 16,
          },
        },
  
        Categories: {
          size:15,
          color: {
            background: '#DA1C5C',
            border: '#DA1C5C',
            hover: {
              background: 'white',
              border: '#DA1C5C',
            },
            highlight: {
              border: '#DA1C5C',
              background: 'white'
            },
          },
          borderWidth: 3,
          font: {
            face: 'Arial Narrow',
            color: '#292929',
            size: 18,
          },
        },
  
        Where: {
          size:7,
          color: {
            background: 'white',
            border: '#6CCBDB',
            hover: {
              background: 'white',
              border: '#6CCBDB',
            },
            highlight: {
              border: '#6CCBDB',
              background: 'white'
            },
          },
          borderWidth: 3,
          font: {
            face: 'Arial Narrow',
            color: '#292929',
            size: 18,
          },
        },
  
        Company: {
          size:7,
          shape:"square",
          color: {
            background: '#DA1C5C',
            border: '#DA1C5C',
            hover: {
              background: 'white',
              border: '#DA1C5C',
            },
            highlight: {
              border: '#DA1C5C',
              background: 'white'
            },
          },
          borderWidth: 3,
          font: {
            face: 'Arial Narrow',
            color: '#292929',
            size: 18,
          },
        },
    
      }
    },
  }

render(){
  return (
    <div id="graphcontainer">
    <Graph graph={this.state.graph} options={this.state.options} style={{height: "inherit"}} />
    </div>
  )
}
  
}

export default Graphvis
