export const graphOptions = {
    options: {
        nodes: {
          shape: "dot",
          font: {
            size: 15,
            face: "Arial Narrow",
          },
          shadow: true,
          scaling:{
            min:15,
            max:50,
            label:{
                min:15,
                max:50,
                enabled:true,
            }
          },
        },
        edges: {
          width: 1,
          color: { inherit: "to" },
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
          // tooltipDelay: 150,
          hideEdgesOnDrag: false,
          hideEdgesOnZoom: true,
          hover: true,
          // navigationButtons: true,
          keyboard: true,
        },
        groups: {
          myCore: {
            shape:"box",
            color: {
              background: '#AF1E4F',
              border: '#AF1E4F',
              hover: {
                background: '#AF1E4F',
                border: '#AF1E4F',
                font:{
                  color: '#AF1E4F',
                },
              },
              highlight: {
                border: '#AF1E4F',
                background: '#AF1E4F',
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
            value:100,
          },
          project: {
            shape: "square", 
            color: {
              background: '#F16493',
              border: '#DA1C5C',
              highlight: {
                border: '#DA1C5C',
                background: '#F16493'
              },
              hover: {
                background: '#F16493',
                border: '#DA1C5C',
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: '#111',
            },
            value:10,
          },
          product: {
            shape: "dot", 
            color: {
              background: '#F16493',
              border: '#DA1C5C',
              highlight: {
                border: '#DA1C5C',
                background: '#F16493'
              },
              hover: {
                background: '#F16493',
                border: '#DA1C5C',
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: '#111',
            },
            value:15,
          },
          eduProject: {
            shape:"square",   
            color: {
              background: '#DA1C5C',
              border: '#DA1C5C',
              highlight: {
                border: '#DA1C5C',
                background: '#DA1C5C'
              },
              hover: {
                background: '#DA1C5C',
                border: '#DA1C5C',
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: '#111',
              size: 15,
            },
            value:15,
          },  
          myTools: {
            shape:"dot",
            shapeProperties:{
              
            },
            color: {
              background: '#6CCBDB',
              border: '#0B869B',
              hover: {
                background: '#6CCBDB',
                border: '#0B869B',
              },
              highlight: {
                border: '#0B869B',
                background: '#6CCBDB'
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: '#111',
              size: 18,
            },
            value:15,
          },
          myToolGroup: {
            shape:"dot",
            color: {
              background: '#0B869B',
              border: '#0B869B',
              hover: {
                background: '#0B869B',
                border: '#0B869B',
              },
              highlight: {
                border: '#0B869B',
                background: '#0B869B'
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: '#111',
              size: 18,
            },
            value:25,
          },
          Things: {
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
            },
            value:15,
          },   
          Role: {
            shape:"dot",
            color: {
              background: '#AF1E4F',
              border: '#AF1E4F',
              hover: {
                background: '#AF1E4F',
                border: '#AF1E4F',
              },
              highlight: {
                border: '#AF1E4F',
                background: '#AF1E4F'
              },
            },
            borderWidth: 5,
            font: {
              face: 'Arial Narrow',
              color: '#111',
            },
            value:25,
          }, 
          Categories: {
            shape:"box",
            shapeProperties:{
              borderRadius:4,
            },
            color: {
              background: '#AF1E4F',
              border: '#AF1E4F',
              hover: {
                background: '#AF1E4F',
                border: '#AF1E4F',
              },
              highlight: {
                border: '#AF1E4F',
                background: '#AF1E4F'
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: 'white',
              size: 14,
            },
            value:75,
          },
          Where: {
            size:7,
            shape:"triangle",
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
            shape:"dot",
            color: {
              background: '#DA1C5C',
              border: '#AF1E4F',
              hover: {
                background: '#DA1C5C',
                border: '#DA1C5C',
              },
              highlight: {
                border: '#DA1C5C',
                background: '#DA1C5C'
              },
            },
            borderWidth: 3,
            font: {
              face: 'Arial Narrow',
              color: '#292929',
              size: 18,
            },
            value:25,
          },
      
        },
        
      },
}