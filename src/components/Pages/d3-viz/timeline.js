import React, { Component } from 'react';

import * as d3 from 'd3';

import './timeline.css';


class Timeline extends Component {

  state = {
    data: {
      tasksArray: [
        //Education
        {
          task: "B.A.S",
          type: "Education",
          testValue: 50,
          startTime: "2010,9,01", //year/month/day
          endTime: "2015,8,15",
          radius: 25,
          details: "Some of that good Undergrad learnin'",
          sort: "Personal"
        },
        {
          task: "M.Arch",
          type: "Education",
          startTime: "2015,9,01", //year/month/day
          endTime: "2017,4,27",
          details: "Completed some sort of Thesis, achieved M.Arch",
          testValue: 50,
          radius: 25,
          sort: "Personal"
        },
        //SCHOOL Architecture

        {
          task: "East Humber Bay",
          type: "Studies",
          startTime: "2012-4-28", //year/month/day
          endTime: "2012-7-29",
          testValue: 25,
          details: "Studio Project",
          radius: 25,
          sort: "Personal"
        },
        {
          task: "Rattlesnake Point",
          type: "Studies",
          startTime: "2013-9-28", //year/month/day
          endTime: "2013-11-29",
          testValue: 25,
          details: "Studio Project",
          radius: 25,
          sort: "Personal"
        },
        {
          task: "C_BE",
          type: "Studies",
          startTime: "2013-10-28", //year/month/day
          endTime: "2013-11-29",
          testValue: 25,
          details: "ACADIA2013",
          radius: 25,
          sort: "Personal"
        },
        {
          task: "Museum of Rome",
          type: "Studies",
          startTime: "2014-8-28", //year/month/day
          endTime: "2014-11-29",
          testValue: 25,
          details: "Rome Semester",
          radius: 25,
          sort: "Personal"
        },
        {
          task: "Dreki Spa",
          type: "Studies",
          startTime: "2015-5-15", //year/month/day
          endTime: "2015-8-15",
          testValue: 25,
          details: "Final Undergrad Work",
          radius: 25,
          sort: "Personal"
        },
        {
          task: "Toronto Rail Deck Park",
          type: "Studies",
          startTime: "2015-11-15", //year/month/day
          endTime: "2017-4-27",
          testValue: 50,
          details: "Final Undergrad Work",
          radius: 25,
          sort: "Personal"
        },
        // DataViz
        {
          task: "Salisbury Ave",
          type: "DataViz",
          testValue: 50,
          startTime: "2014-3-1",
          endTime: "2014-7-1",
          sort:"Personal",
          details: "Graphic Design Opportunites with Sam Vickars"
        },
        {
          task: "Toronto Flooding Maps",
          type: "DataViz",
          testValue: 50,
          startTime: "2019-1-1",
          endTime: "2019-3-1",
          sort:"Professional",
          details: "Using GIS drawn mapsfor marketing material"
        },
        {
          task: "Malta Hospital",
          type: "DataViz",
          testValue: 50,
          startTime: "2019-3-15",
          endTime: "2019-5-1",
          sort:"Professional",
          details:"building dashboards for assessing service activity"
        },
        {
          task: "UHN Master Plan",
          type: "DataViz",
          testValue: 50,
          startTime: "2019-6-6",
          endTime: "2019-9-1",
          sort: "Professional",
          details:"building database for network distribution and assests"
        },
        // Product Work

        {
          task: "Interluude",
          type: "Product",
          testValue: 50,
          startTime: "2014-2-12",
          endTime: "2014-7-14",
          sort: "Personal",
          details:"start-up exploration with Sam Vickars"
        },
        {
          task: "Rockstar Cafe",
          type: "Product",
          testValue: 50,
          startTime: "2015-5-12",
          endTime: "2015-7-14",
          sort: "Personal",
          details: "Product Visualizations and Interior Renderings"
        },
        {
          task: "Revlo Pitch",
          type: "Product",
          testValue: 50,
          startTime: "2015-8-12",
          endTime: "2015-9-14",
          sort:"Personal",
          details:"Building a product feature pitch deck"
        },
        {
          task: "Autocase",
          type: "Product",
          testValue: 50,
          startTime: "2017-7-12",
          endTime: "2017-9-14",
          sort: "Professional",
          details: "Consulting on UX/UI Design"
        },
        {
          task: "This.Dot",
          type: "Product",
          testValue: 50,
          startTime: "2019-9-12",
          endTime: "2019-10-14",
          sort: "Personal",
          details: "Exploring App Design"
        },
        {
          task: "Neurobody Branding Pitch",
          type: "Product",
          testValue: 50,
          startTime: "2020-3-12",
          endTime: "2020-5-14",
          sort:"Personal",
          details:"Pitch deck for expanding Neurobody branding"
        },
        {
          task: "LD Game Jam",
          type: "Product",
          testValue: 50,
          startTime: "2020-4-19",
          endTime: "2020-4-25",
          sort: "Personal",
          details: "LudumDare Game Jam"
        },


        // Architecture
        {
          task: "MSG",
          type: "Architecture",
          startTime: "2012-1-2",
          endTime: "2012-4-30",
          testValue: 50,
          sort:"Professional",
          details: "Scoreclock design and visualization"
        },
        {
          task: "LA Forum",
          type: "Architecture",
          startTime: "2012-9-2",
          endTime: "2012-11-30",
          testValue: 50,
          sort:"Professional",
          details: "Architectural Visualizations"
        },
        {
          task: "Detroit by Design",
          type: "Architecture",
          startTime: "2013-05-2",
          endTime: "2013-07-30",
          sort:"Professional",
          details: "Design Competition Entry"
        },
        {
          task: "Brockley Residents",
          type: "Architecture",
          startTime: "2014-01-2",
          endTime: "2014-07-30",
          sort:"Professional",
          details: "Managing SD & Planning Submission"
        },
        {
          task: "Bruce Power",
          type: "Architecture",
          startTime: "2015-01-2",
          endTime: "2015-05-1",
          sort: "Professional",
          details: "Architectural Intern"
        },
        {
          task: "Stratford Festival",
          type: "Architecture",
          startTime: "2016-4-2",
          endTime: "2016-8-3",
          sort:"Professional",
          details: "Functional Programming of Design Competition"
        },
        {
          task: "Calgary Cancer Research",
          type: "Architecture",
          startTime: "2016-11-2",
          endTime: "2017-02-1",
          sort:"Professional",
          details: "Architectural Intern"
        },
        {
          task: "SickKids Project Horizon",
          type: "Architecture",
          startTime: "2017-5-1",
          endTime: "2017-12-17",
          sort:"Professional",
          details: "Architectural Intern Master Planning"
        },
        {
          task: "SickKids PSC",
          type: "Architecture",
          startTime: "2018-1-1",
          endTime: "2018-6-21",
          sort:"Professional",
          details: "Functional Programming Report"
        },
        {
          task: "UHN Master Plan",
          type: "Architecture",
          startTime: "2018-9-1",
          endTime: "2019-9-1",
          sort: "Professional",
          details: "all three lines of it"
        },
        {
          task: "Kapio'lani MCWC",
          type: "Architecture",
          startTime: "2018-7-1",
          endTime: "2018-7-21",
          sort: "Professional",
          details: "Parametric Models for test-fits"
        },
        {
          task: "Malta Hospital",
          type: "Architecture",
          startTime: "2019-3-1",
          endTime: "2019-6-1",
          sort: "Professional",
          details: "all three lines of it"
        },

        //VOLUNTEERs
        {
          task: "F_RMLab",
          type: "Volunteer",
          startTime: "2013-7-15", //year/month/day
          endTime: "2016-8-29",
          testValue: 50,
          details: "Final Undergrad Work",
          sort:"Personal"
        },
        {
          task: "BRIDGE",
          type: "Volunteer",
          startTime: "2015-7-15", //year/month/day
          endTime: "2017-4-27",
          testValue: 50,
          details: "Final Undergrad Work",
          sort:"Personal"
        },
        {
          task: "DBEI",
          type: "Volunteer",
          startTime: "2020-3-15", //year/month/day
          endTime: "2020-9-1",
          testValue: 50,
          details: "Final Undergrad Work",
          sort:"Professional"
        },
        // Work PLACES
        {
          task: "Foam Factor",
          type: "Work",
          startTime: "2009-1-2",
          endTime: "2010-8-6",
          testValue: 15,
          details: "all three lines of it",
          sort:"Professional"
        },
        {
          task: "BBB Architects",
          type: "Work",
          startTime: "2012-1-2",
          endTime: "2012-4-6",
          testValue: 15,
          details: "all three lines of it",
          sort:"Professional"
        },
        {
          task: "BBB Architects",
          type: "Work",
          startTime: "2012-9-2",
          endTime: "2012-12-6",
          sort:"Professional",
          details: "all three lines of it"
        },
        {
          task: "BBB Architects",
          type: "Work",
          startTime: "2013-4-2",
          endTime: "2013-8-6",
          sort:"Professional",
          details: "all three lines of it"
        },
        {
          task: "Base Associates",
          type: "Work",
          startTime: "2014-1-2",
          endTime: "2014-8-6",
          sort:"Professional",
          details: "all three lines of it"
        },
        {
          task: "Stantec",
          type: "Work",
          startTime: "2015-1-2",
          endTime: "2015-4-6",
          sort:"Professional",
          details: "all three lines of it"
        },
        {
          task: "University of Waterloo",
          type: "Work",
          startTime: "2016-4-2",
          endTime: "2016-9-6",
          sort:"Professional",
          details: "all three lines of it"
        },
        {
          task: "Stantec",
          type: "Work",
          startTime: "2016-11-2",
          endTime: "2019-9-6",
          sort:"Professional",
          details: "all three lines of it"
        },

        {
          task: "Curios Strategies",
          type: "Work",
          startTime: "2020-1-2",
          endTime: "2020-9-1",
          sort:"Professional",
          details: "all three lines of it"
        },


        //Roles

        {
          task: "Spray Foam Assistant Manager",
          type: "Role",
          testValue: 50,
          startTime: "2009-1-6",
          endTime: "2010-8-6",
          sort:"Professional"
        },
        {
          task: "Architect Student",
          type: "Role",
          testValue: 50,
          startTime: "2010-9-1",
          endTime: "2012-5-1",
          sort:"Professional"
        },
        {
          task: "Architect Intern",
          type: "Role",
          testValue: 50,
          startTime: "2012-9-2",
          endTime: "2018-5-15",
          sort:"Professional"
        },
        {
          task: "Architectural Data Analysts",
          type: "Role",
          testValue: 50,
          startTime: "2018-6-1",
          endTime: "2019-9-1",
          sort:"Professional"
        },

      ]
    }
  };

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {

    // Define the div for the tooltip
    var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

    // const data =  [12, 5, 6, 6, 9, 10];
    const gantt = this.state.data.tasksArray

    const WIDTH = 375;
    const HEIGHT = 900;
    const MARGIN = 50;


    // Initialize SVG canvas
    const svg = d3.select("#timeline")
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT);


    // ADD X Axis


    const xScale = d3.scaleBand()
      .domain(gantt.map((d) => d.type))
      .padding(1)
      .range([0,275]);


    svg.append("g")
      .attr("transform", `translate(${MARGIN},${HEIGHT - MARGIN})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "translate(-15,15)rotate(-90)")
      ;

    // X axis Label
    svg.append("text")
      .attr("text-anchor", 'end')
      .attr("x", WIDTH)
      .attr("y", 25)
      .text("categories")
      .attr("font-family", 'Roboto Condensed');


    // ADD Y Axis

    const yScale = d3.scaleTime()
      .domain([new Date(2008, 7, 15), new Date(2020, 7, 15)]) //what is written on the axis
      .range([HEIGHT - MARGIN, MARGIN]);

    svg.append("g")
      .attr("transform", `translate(${MARGIN},0)`) // position of the axis
      .call(d3.axisLeft(yScale))

    svg.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", MARGIN / 2 - 10)
      .attr("x", -MARGIN / 2)
      .text("timeline of sorts")
      .attr("font-family", 'Roboto Condensed');


    // Adding Data



    // enter
svg.selectAll('rect')
      .data(gantt)
      .enter()
      .append("rect")
      .attr("class", "timeline-bars")
      .attr("x", function (d) { return xScale(d.type) + MARGIN })
      .attr("y", function (d) { return yScale(new Date(d.endTime)) })
      .attr("height", function (d) { return yScale(new Date(d.startTime)) - yScale(new Date(d.endTime)) })
      .attr("width", 15)
      .attr('fill', function (d) {
        if (d.sort === 'Personal') {
          if (d.type === 'Education'){
            return '#00455D'
          }
          else { return 'rgba(0,69,93,0.5)'}
        } else if (d.sort === 'Professional') {
          if (d.type === 'Work'){
            return 'rgba(218,28,92,1)'
          } else {
            return 'rgba(218,28,92,0.5)'
          }
        } 
      })
      .on("mouseover", function(d) {		
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div.html(d.task )	
            .style("left", (d3.event.pageX) + "px")		
            .style("top", (d3.event.pageY - 28) + "px");	
        })					
    .on("mouseout", function(d) {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
    });



    // filters go in defs element
    var defs = svg.append("defs");
    var filter = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', '120%');

    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 15)
      .attr('result', 'blur');

    filter.append('feOffset')
      .attr('in', 'blur')
      .attr("dx", 2)
      .attr("dy", 5)
      .attr('result', 'offsetBlur');

    filter.append("feFlood")
      .attr("in", "offsetBlur")
      .attr("flood-color", 'grey')
      .attr("flood-opacity", "0.75")
      .attr("result", "offsetColor");

    filter.append("feComposite")
      .attr("in", "offsetColor")
      .attr("in2", "offsetBlur")
      .attr("operator", "in")
      .attr("result", "offsetBlur");

    var feMerge = filter.append('feMerge');

    feMerge.append('feMergeNode')
      .attr('in', 'offsetBlur')
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');
  }


  render() {
    return (
      <div id="timeline"></div>
    )
  }
}

export default Timeline;

