import React, { Component } from 'react';

import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import './timeline.css';
import world from './../../../data/world-110m.json';


class WorldMap extends Component {

  state = {
    data:{}, 
    globe:{world}
  };

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    var dims = {
      width: 1000,
      height: 800,
      svg_dx:100,
      svg_dy:100}

    console.log(this.state.globe)
    
    var radius = 4;

    
    var projection = d3.geoMercator()
      .scale(85)
      .translate([dims.width / 2, dims.height/ 2])
      .precision(.1);
    
    var path = d3.geoPath()
      .projection(projection);
    
    var graticule = d3.geoGraticule();
    
    
    // define tool tip
    var tooltip = d3.select("#worldmap").append("div")
      .attr("class","tooltip")
      .style("opacity", 0);

    // initiate svg canvas
    var svg = d3.select("#worldmap").append("svg")
      .attr("width", dims.width)
      .attr("height", dims.height);


     
    var map = svg.append("g")
     
      map.append("path")
          .datum(topojson.feature(world, world.objects.land))
          .attr("class", "land")
          .attr("d", path)
          .attr('stroke-width',1/this._scale)

    
      map.append("path")
          .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
          .attr("class", "boundary")
          .attr('stroke-width',1/1)
          .attr("d", path);
    
    
      map.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", "#EC008C")
        .style("")
        .style('stroke-width',1/1)

      map.append("path")
        .datum(graticule.outline())
        .attr("class", "outline")
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", "#EC008C")
        .style('stroke-width',1/1)
    
      // appending zoom call
        svg.call(d3.zoom()
          .extent([[dims.svg_dx, dims.svg_dy], [dims.width-(dims.svg_dx*2), dims.height-dims.svg_dy]])
          .scaleExtent([1,8])
          .translateExtent([[dims.svg_dx, dims.svg_dy], [dims.width-(dims.svg_dx*2), dims.height-dims.svg_dy]])
          .on("zoom", zoomed))
          // zoom event, styling on zoom event.
          function zoomed() {
            map.attr("transform", d3.event.transform)
            map.attr("stroke-width", 1/d3.event.transform.k)
          }
    

    
        // Handling Mouse Hover Interactions
        // function handleMouseOver(d,i){
        //   d3.select(this).transition()
        //     .duration('100')
        //     .style('fill', '#1D2D50')
        //     .attr('r', (radius *2));
    
        //   tooltip.transition()		
        //     .duration("200")		
        //     .style("opacity", .9);
    
        //   tooltip.html("<h3>" + d.properties.city + ", " + d.properties.country +"</h3>")
        //     .style("left", d3.event.pageX + "px")		
        //     .style("top", d3.event.pageY + "px")
        //     .style("padding",".5em");  
    
        //     console.log(d3.event.pageX);
        // };
        
        
        // function handleMouseOut(d,i) {
        //   d3.select(this).transition()
        //     .duration('100')
        //     .style('fill', '#1D2D50')
        //     .attr('r', radius);
        //   tooltip.transition()		
        //     .duration("500")		
        //     .style("opacity", 0);	
        //   // Select text by id and then remove
        //   d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
        
    
        // };
    
        // // Handle Mouse Click Interaction
    
        // function handleMouseClick(d,i){
        //   //REMOVE IF IT ALREADY EXISTS
        //   d3.select("#project_title").remove()      
        //   d3.select("#project_desc").remove()
        //   d3.select("#selected_nodes").remove()
    
    


        // };


  }

  render() {
    return (
      <div id="worldmap"></div>
    )
  }
}

export default WorldMap;

