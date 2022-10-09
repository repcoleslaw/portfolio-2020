// by having the value driven by the categories and not the items i can reduce the override?

export const projectData = {
    graph:{
        nodes:[
          { id: 0, label: "[a]", group: 'myCore'},
    
          { id: 1, label: "Architecture", group: 'Categories'},
          // { id: 2, label: "Data Viz", group: 'Categories'},
          { id: 3, label: "Product", group: 'Categories'},
          { id: 4, label: "Personal", group: 'Categories'},
    

          { id: 104, label: "Arch.Intern", group: "Role",},
          { id: 106, label: "Architectural Data Analyst", group: "Role",},
          // { id: 107, label: "DBEI Committee Member", group: "Role",},
          { id: 108, label: "Front-End Dev", group: "Role",},
          { id: 109, label: "Product Manager", group: "Role",},
          { id: 110, label: "Product Owner", group: "Role",},
          { id: 111, label: "BRIDGE Director", group: "eduProject"},
          { id: 112, label: "F_RMLab Director", group: "eduProject"},
          { id: 113, label: "Founder", group: "Role"},
    
          { id: 200, label: "Thesis: Toronto Rail Deck Park", group: "eduProject"},
          { id: 201, label: "B.A.S", group: "eduProject"},
          { id: 202, label: "M.Arch", group: "eduProject"},

          { id: 300, label: "SickKids", group: "project"},
          { id: 301, label: "UHN", group: "project"},
          { id: 302, label: "Sinai Health System", group: "project"},
          { id: 303, label: "Calgary Cancer Centre", group: "project"},
          { id: 304, label: "KMCWC", group: "project"},
          { id: 305, label: "Madison Square Gardens", group: "project"},
          { id: 306, label: "LA Forum", group: "project"},
          { id: 307, label: "NYC Stadium Feasibility", group: "project"},
          { id: 308, label: "Bruce Power", group: "project"},
          { id: 309, label: "Brockley Residential", group: "project"},
          { id: 310, label: "Vauxhall BID", group: "project"},
          { id: 311, label: "Malta Hospital", group: "project"},
          { id: 312, label: "Niagara Health System", group: "project"},

          { id: 400, label: "3DM", group: 'myToolGroup'},
          { id: 401, label: "Grasshopper", group: 'myTools'},
          { id: 402, label: "Revit", group: "myTools"},
          { id: 403, label: "SQL", group: "myTools"},
          { id: 404, label: "javascript", group: "myTools"},
          { id: 405, label: "HTML", group: "myTools"},
          { id: 406, label: "GIS", group: 'myTools'},
          { id: 407, label: "Sketch-Up", group: 'myTools'},
          { id: 408, label: "PowerBI", group: 'myTools'},
          { id: 409, label: "D3.js", group: 'myTools'},
          { id: 410, label: "React.js", group: 'myTools'},
          { id: 411, label: "Rhino", group: 'myTools'},
          { id: 412, label: "Figma", group: 'myTools'},
          { id: 413, label: "Illustrator", group: 'myTools'},
          { id: 414, label: "Photoshop", group: 'myTools'},
          { id: 415, label: "InDesign", group: 'myTools'},
          { id: 416, label: "Graphics", group: 'myToolGroup'},
          { id: 417, label: "Development", group: 'myToolGroup'},
    
          // { id: 500, label: "3D Printing", group: 'Things'},
          // { id: 501, label: "Soccer", group: 'Things'},
          // { id: 502, label: "Hockey Goalie", group: 'Things'},
          // { id: 503, label: "Volleyball", group: 'Things'},
          // { id: 504, label: "Starcraft 2", group: 'Things'},
          // { id: 505, label: "Piano", group: 'Things'},
    
          { id: 600, label: "BBB Architects", group: 'Company'},
          // { id: 601, label: "Foam Factor", group: 'Company'},
          { id: 602, label: "Base Associates", group: 'Company'},
          { id: 603, label: "Stantec", group: 'Company'},
          { id: 604, label: "University of Waterloo", group: 'Company'},
          { id: 605, label: "Curios Strategies", group: "Company"},
    
          // { id: 700, label: "Toronto, CA", group: 'Where'},
          // { id: 701, label: "London, UK", group: 'Where'},
          // { id: 702, label: "Rome, ITA", group: 'Where'},
          // { id: 703, label: "Cambridge, CA", group: 'Where'},
          
          { id: 805, label: "Neurobody", group: 'product'},
          { id: 806, label: "WODPool", group: 'product'},
          { id: 807, label: "Gemini", group: 'product'},
          { id: 808, label: "GeneSys", group: 'product'},
          { id: 809, label: "Graphite", group: 'product'},
          { id: 810, label: "Ribbon", group: 'product'},
        ],
        edges: [
        // CORE TO MAIN HUBS - I want to have a clear categorization
        { from: 0, to: 1 }, // Architecture
        { from: 0, to: 3 }, // Product
        { from: 0, to: 4 }, // Hobbies

        //the exception to the this structure is eductation.
        // volunteer positions to school
        { from: 111, to: 604 },
        { from: 112, to: 604 },
        //eduProjects to School
        { from: 202, to: 200 },
        { from: 604, to: 201 },
        { from: 604, to: 202 },

        //roles to categories - I want to share what roles I have in that pillar.
        { from: 1, to: 100 },
        { from: 1, to: 101 },
        { from: 1, to: 102 },
        { from: 1, to: 103 },
        { from: 1, to: 104 },
        { from: 1, to: 105 },
        { from: 1, to: 106 },
        { from: 1, to: 107 },
        { from: 1, to: 604 },
        { from: 3, to: 109 },
        { from: 3, to: 110 },
        { from: 3, to: 113 },
        // then I want to show what companies benefit from my roles.
        // Roles to Companies
        { from: 104, to: 600 },
        { from: 104, to: 602 },
        { from: 104, to: 603 },
        { from: 106, to: 603 },
        { from: 100, to: 604 },
        { from: 101, to: 604 },
        { from: 109, to: 603 },
        { from: 110, to: 603 },
        { from: 113, to: 605 },
        // then I want to show what products/projects got done at each Company. These will be dashed. The STRONG line is to the ROLE
        // to BBB
        { from: 305, to: 600, dashes:[5,5]},
        { from: 306, to: 600, dashes:[5,5]},
        { from: 307, to: 600, dashes:[5,5]},
        // to Base
        { from: 309, to: 602, dashes:[5,5]},
        { from: 310, to: 602, dashes:[5,5]},
        // to Stantec
        { from: 300, to: 603, dashes:[5,5]},
        { from: 301, to: 603, dashes:[5,5]},
        { from: 302, to: 603, dashes:[5,5]},
        { from: 303, to: 603, dashes:[5,5]},
        { from: 304, to: 603, dashes:[5,5]},
        { from: 308, to: 603, dashes:[5,5]},
        { from: 311, to: 603, dashes:[5,5]},
        { from: 807, to: 603, dashes:[5,5]},
        { from: 808, to: 603, dashes:[5,5]},
        { from: 809, to: 603, dashes:[5,5]},
        { from: 810, to: 603, dashes:[5,5]},
        // to Curios
        { from: 312, to: 605, dashes:[5,5]},
        { from: 802, to: 605, dashes:[5,5]},
        { from: 803, to: 605, dashes:[5,5]},
        { from: 804, to: 605, dashes:[5,5]},
        { from: 805, to: 605, dashes:[5,5]},
        { from: 806, to: 605, dashes:[5,5]},
        //Now the Strong Direction - projects/products to roles
        // to BBB
        { from: 305, to: 104},
        { from: 306, to: 104},
        { from: 307, to: 104},
        // to Base
        { from: 309, to: 104},
        { from: 310, to: 104},
        // to Stantec
        { from: 300, to: 104},
        { from: 301, to: 106},
        { from: 302, to: 106},
        { from: 303, to: 104},
        { from: 304, to: 106},
        { from: 308, to: 104},
        { from: 311, to: 106},
        { from: 807, to: 110},
        { from: 808, to: 109},
        { from: 809, to: 110},
        { from: 810, to: 110},
        // to Curios
        { from: 312, to: 110},
        { from: 802, to: 110},
        { from: 803, to: 110},
        { from: 804, to: 110},
        { from: 805, to: 110},
        { from: 806, to: 110},

      
        //Tools to Toolset
        //Tools to 3DM
        { from: 400, to: 1 },
        { from: 401, to: 400 },
        { from: 402, to: 400 },
        { from: 407, to: 400 },
        { from: 411, to: 400 },
        { from: 400, to: 100 },
        { from: 400, to: 101 },
        { from: 400, to: 105 },
      
        //3dm dashed to the roles requiring it
        { from: 401, to: 411, dashes: [5, 5] },
        { from: 400, to: 2, dashes: [5, 5] },
      
        // Graphics to group
        { from: 412, to: 416 },
        { from: 413, to: 416 },
        { from: 414, to: 416 },
        { from: 415, to: 416 },
        //Graphic Roll Up to category
        { from: 416, to: 1, dashes:[5,5]},
        { from: 416, to: 3, dashes:[5,5] },
        { from: 416, to: 4, dashes:[5,5] },

        //Roll up development techs to dev
        {from: 403, to: 417 },
        {from: 404, to: 417 },
        {from: 405, to: 417 },
        {from: 406, to: 417 },
        {from: 408, to: 417 },
        {from: 409, to: 417 },
        {from: 410, to: 417 },
        //dev to categories
        {from: 417, to: 3, dashes:[5,5] },
        {from: 417, to: 4, dashes:[5,5] },
        //dev to roles
        {from: 417, to: 108 },
        {from: 417, to: 109 },

        // Tools Dashed
        { from: 404, to: 409, dashes: [5, 5] }, // js
        { from: 404, to: 410, dashes: [5, 5] },
        { from: 404, to: 405, dashes: [5, 5] },
        { from: 403, to: 408, dashes: [5, 5] }, // sql
        { from: 403, to: 406, dashes: [5, 5] }, // sql
      

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
      }
}