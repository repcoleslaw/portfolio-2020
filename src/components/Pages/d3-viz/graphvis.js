import React from 'react'
 
import Graph from "react-graph-vis";

function Graphvis() {
    
  const graph = {
    nodes:[
      { id: 0, label: "arrcole", group: 'myCore', value: 80 },
      { id: 1, label: "Architecture", group: 'myArch', value: 60 },
      { id: 2, label: "Data", group: 'myData', value: 60 },
      { id: 3, label: "Tools", group: 'myTools', value: 60 },
      { id: 4, label: "Hobbies", group: 'myHobbies', value: 60 },
      { id: 5, label: "UWSA", group: "myArch", value: 45 },
      { id: 6, label: "Projects", group: "myArch", value: 45 },
      { id: 7, label: "Thesis", group: "myArch", value: 25 },
      { id: 8, label: "Undergrad", group: "myArch", value: 25 },
      { id: 9, label: "Dreki Spa", group: "myArch", value: 25 },
      { id: 10, label: "Rattlesnake Point", group: "myArch", value: 25 },
      { id: 11, label: "Museo Roma", group: "myArch", value: 25},
      { id: 12, label: "C_BE", group: "myArch", value: 25 },
      { id: 13, label: "BRIDGE", group: "myArch", value: 25 },
      { id: 14, label: "SickKids", group: "myArch", value: 25 },
      { id: 15, label: "UHN", group: "myArch", value: 25 },
      { id: 16, label: "Sinai Health System", group: "myArch", value: 25 },
      { id: 17, label: "Calgary Cancer Centre", group: "myArch", value: 25 },
      { id: 18, label: "KMCWC", group: "myArch", value: 25 },
      { id: 19, label: "Madison Square Gardens", group: "myArch", value: 25 },
      { id: 20, label: "LA Forum", group: "myArch", value: 25 },
      { id: 21, label: "NYC Stadium Feasibility", group: "myArch", value: 25 },
      { id: 22, label: "Bruce Power", group: "myArch", value: 25 },
      { id: 23, label: "Brockley Residential", group: "myArch", value: 25 },
      { id: 24, label: "Vauxhall BID", group: "myArch", value: 25 },
      { id: 25, label: "Venues & Athletic Facilities", group: "myArch", value: 40 },
      { id: 26, label: "Healthcare", group: "myArch", value: 40 },
      { id: 27, label: "Malta Hospital", group: "myArch", value: 25 },
      { id: 28, label: "TFC Training", group: "myArch", value: 25 },
      { id: 29, label: "Raptors Training", group: "myArch", value: 25 },
      { id: 30, label: "Generative & Parametric", group: 'myTools', value: 25 },
      { id: 31, label: "Grasshopper", group: 'myTools', value: 25 },
      { id: 32, label: "Dynamo", group: 'myTools', value: 25 },
      { id: 33, label: "Coding", group: "myCode", value: 35 },
      { id: 34, label: "SQL", group: "myCode", value: 25 },
      { id: 35, label: "javascript", group: "myCode", value: 35 },
      { id: 36, label: "HTML/CSS", group: "myCode", value: 25 },
      { id: 37, label: "GIS", group: 'myTools', value: 25 },
      { id: 38, label: "3DM", group: 'myTools', value: 25 },
      { id: 39, label: "Revit", group: 'myTools', value: 25 },
      { id: 40, label: "Rhino", group: 'myTools', value: 25 },
      { id: 41, label: "Sketch-Up", group: 'myTools', value: 25 },
      { id: 42, label: "PowerBI", group: 'myData', value: 25 },
      { id: 43, label: "D3.js", group: 'myData', value: 25 },
      { id: 44, label: "Sports", group: 'myHobbies', value: 25 },
      { id: 45, label: "Games", group: 'myHobbies', value: 25 },
      { id: 46, label: "Music", group: 'myHobbies', value: 25 },
      { id: 47, label: "Soccer", group: 'myHobbies', value: 25 },
      { id: 48, label: "Hockey", group: 'myHobbies', value: 25 },
      { id: 49, label: "Volleyball", group: 'myHobbies', value: 25 },
      { id: 50, label: "Starcraft", group: 'myHobbies', value: 25 },
      { id: 51, label: "Piano", group: 'myHobbies', value: 25 },
      { id: 52, label: "Trumpet", group: 'myHobbies', value: 25 },
      { id: 53, label: "GameDev", group: 'myHobbies', value: 25 },
      { id: 54, label: "ARPG", group: 'myHobbies', value: 25 },
      { id: 55, label: "blog", group: 'mySocials', value: 25, url: 'http://www.arrcole.com/blog/' },
      { id: 56, label: "twitter", group: 'mySocials', value: 25, url: "https://twitter.com/arrcole" },
      { id: 57, label: "instagram", group: 'mySocials', value: 25, url: "https://www.instagram.com/arrcole/" },
      { id: 58, label: "Product Design", group: 'myProducts', value: 45 },
      { id: 59, label: "Autocase", group: 'myProducts', value: 25 },
      { id: 60, label: "Revlo", group: 'myProducts', value: 25 },
      { id: 61, label: "This.Dot", group: 'myProducts', value: 25 },
      { id: 62, label: "youtube", group: 'mySocials', value: 25, url: "https://www.youtube.com/channel/UCBjIlBmhpzifvXySKosvuEg" }
    ],
    edges: [
  { from: 1, to: 0 },
  { from: 1, to: 3 },
  { from: 2, to: 0 },
  { from: 3, to: 0 },
  { from: 4, to: 0 },
  { from: 5, to: 1 },
  { from: 6, to: 1 },
  { from: 7, to: 5 },
  { from: 8, to: 5 },
  { from: 9, to: 8 },
  { from: 10, to: 8 },
  { from: 11, to: 8 },
  { from: 12, to: 8 },
  { from: 13, to: 5 },
  { from: 14, to: 26 },
  { from: 15, to: 26 },
  { from: 16, to: 26 },
  { from: 17, to: 26 },
  { from: 18, to: 26 },
  { from: 19, to: 25 },
  { from: 20, to: 25 },
  { from: 21, to: 25 },
  { from: 22, to: 6 },
  { from: 23, to: 6 },
  { from: 24, to: 6 },
  { from: 25, to: 6 },
  { from: 26, to: 6 },
  { from: 27, to: 26 },
  { from: 28, to: 25 },
  { from: 29, to: 25 },
  { from: 30, to: 3 },
  { from: 31, to: 30 },
  { from: 32, to: 30 },
  { from: 33, to: 3 },
  { from: 33, to: 4 },
  { from: 34, to: 33 },
  { from: 34, to: 37 },
  { from: 34, to: 2 },
  { from: 35, to: 33 },
  { from: 35, to: 2 },
  { from: 36, to: 33 },
  { from: 37, to: 3 },
  { from: 38, to: 3 },
  { from: 39, to: 38 },
  { from: 39, to: 32 },
  { from: 40, to: 38 },
  { from: 40, to: 31 },
  { from: 41, to: 38 },
  { from: 42, to: 2 },
  { from: 43, to: 2 },
  { from: 44, to: 4 },
  { from: 45, to: 4 },
  { from: 46, to: 4 },
  { from: 47, to: 44 },
  { from: 48, to: 44 },
  { from: 49, to: 44 },
  { from: 50, to: 45 },
  { from: 51, to: 46 },
  { from: 52, to: 46 },
  { from: 53, to: 45 },
  { from: 54, to: 45 },
  { from: 55, to: 0 },
  { from: 56, to: 0 },
  { from: 57, to: 0 },
  { from: 43, to: 35 },
  { from: 58, to: 0 },
  { from: 59, to: 58 },
  { from: 60, to: 58 },
  { from: 61, to: 58 },
  { from: 62, to: 0 }
]
  };

  const options = {
    nodes: {
      shape: "dot",
      scaling: {
        min: 10,
        max: 30,
        label: {
          min: 8,
          max: 30,
          drawThreshold: 2,
          maxVisible: 30
        }
      },
      font: {
        size: 12,
        face: "Roboto Condensed"
      }
    },
    edges: {
      width: 0.15,
      color: { inherit: "from" },
      smooth: {
        type: "continuous"
      }
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springLength: 100,
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
      hover: true
    },
    groups: {
      myCore: {
        color: {
          background: 'white',
          border: '#2F3A56',
          hover: {
            background: 'white',
            border: '#E2474B',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 6,
        font: {
          face: 'Playfair Display',
          color: '#E2474B',
          size: 18,
        },
      },
      myArch: {     
        color: {
          background: 'white',
          border: '#292929',
          highlight: {
            border: 'black',
            background: 'white'
          },
          hover: {
            background: 'white',
            border: '#E2474B',
          },
        },
        borderWidth: 3,
        font: {
          face: 'Roboto Condensed',
          color: '#111',
          size: 18,
        },
      },
  
      myTools: {
        color: {
          background: 'white',
          border: '#292929',
          hover: {
            background: 'white',
            border: '#E2474B',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 3,
        font: {
          face: 'Roboto Condensed',
          color: '#111',
          size: 18,
        },
      },
      myCode: {
        color: {
          background: 'white',
          border: '#292929',
          hover: {
            background: 'white',
            border: '#000000',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 3,
        font: {
          face: 'Roboto Condensed',
          color: '#111',
          size: 18,
        },
      },
      myHobbies: {
        color: {
          background: 'white',
          border: '#292929',
          hover: {
            background: 'white',
            border: '#E2474B',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 3,
        font: {
          face: 'Roboto Condensed',
          color: '#111',
          size: 18,
        },
      },
      myData: {
        color: {
          background: 'white',
          border: '#292929',
          hover: {
            background: 'white',
            border: '#E2474B',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 3,
        font: {
          face: 'Roboto Condensed',
          color: '#111',
          size: 18,
        },
      },
      mySocials: {
        color: {
          background: 'white',
          border: '#292929',
          hover: {
            background: 'white',
            border: '#E2474B',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 2,
        font: {
          face: 'Roboto Condensed',
          color: '#111',
          size: 18,
        },
      },
      myProducts: {
        color: {
          background: 'white',
          border: '#2F3A56',
          hover: {
            background: 'white',
            border: '#E2474B',
          },
          highlight: {
            border: 'black',
            background: 'white'
          },
        },
        borderWidth: 3,
        font: {
          face: 'Roboto Condensed',
          color: '#292929',
          size: 18,
        },
      },
  
    }
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    }
  };

  return (
    <div>
    <Graph graph={graph} options={options} events={events} style={{height: "640px",  }} />
    </div>
  )
}

export default Graphvis
