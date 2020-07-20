import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";



export default class D3Chart {
  constructor(element) {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 40 },
      width = 600 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(element)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    //add data thru json promise
    d3.json(url).then(data =>{
      const rects = svg.selectAll("rect")
        .data(data)

      rects.enter().append("rect")
        .attr("x", (d,i)=> i*100)
        .attr("y", 0)
        .attr("width", 50)
        .attr("height", d=> d.height)
        .attr("fill", "grey")
    })

  }
}