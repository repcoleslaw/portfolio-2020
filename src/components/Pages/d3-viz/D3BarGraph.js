import * as d3 from 'd3';

const MARGIN = {top: 20, right: 20, bottom: 80, left: 80};
const WIDTH = 800 - MARGIN.left - MARGIN.right;
const HEIGHT = 500 - MARGIN.top - MARGIN.bottom;

export default class BarGraph {
  constructor(element){
    const vis = this;

    vis.svg = d3.select(element)
      .append("svg")
        .attr("width", WIDTH + MARGIN.left + MARGIN.right)
        .attr("height", HEIGHT + MARGIN.top + MARGIN.bottom)
      .append("g")
        .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`)

      

    vis.xAxisLabel = vis.svg.append("text")
        .attr("x", WIDTH/2)
        .attr("y", HEIGHT+ 60)
        .attr("text-anchor", "middle")

    vis.svg.append("text")
        .attr("transform","rotate(-90)")
        .attr("x", -(HEIGHT/2))
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .text("Height (in cm)")
        
    vis.xAxisGroup = vis.svg.append("g")
      .attr("transform", `translate(0, ${HEIGHT})`);
    
    vis.yAxisGroup = vis.svg.append("g")


    Promise.all([
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json")
    ]).then((datasets) => {

      vis.menData = datasets[0]
      vis.womenData = datasets[1]

      // const [men, women] = datasets

      // let flag = true;
      // vis.data = men;
      // vis.update()
    
      // d3.interval(()=>{
      //   vis.data = flag ? men : women;
      //   vis.update();
      //   flag =! flag;
      // }, 2000)
    });
  }

  update(dataName){
    const vis = this

    vis.data = (dataName === "men") ? vis.menData : vis.womenData;
    vis.xAxisLabel.text(`The World's Tallest ${dataName}`)
      // create the Y axis scale
      const y = d3.scaleLinear()
        .domain([
          d3.min(vis.data, d=> d.height)*0.95, 
          d3.max(vis.data, d=> d.height)
        ])
        .range([HEIGHT,0]);
    
      //create X axis scale
      
      const x = d3.scaleBand()
        .domain(vis.data.map(d => d.name))
        .range([0, WIDTH])
        .padding(0.5)
      
      // create xAxis generator
      const xAxisCall = d3.axisBottom(x)
        vis.xAxisGroup.transition().duration(500).call(xAxisCall)
        

      // create yAxis generator
      const yAxisCall = d3.axisLeft(y)
      vis.yAxisGroup.transition().duration(500).call(yAxisCall);

      //create xAxis title call
   

      // D3 UPDATE PATTERN
      // DATA JOIN
      const rects = vis.svg.selectAll("rect")
      .data(vis.data)

      // EXIT
      rects.exit()
       .transition().duration(500)
        .attr("y",HEIGHT)
        .attr("height", 0)
        .remove();

      // UPDATE
      rects
      .transition().duration(500)
        .attr("x", d=> x(d.name))
        .attr("y", d=> y(d.height))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT- y(d.height))

      // ENTER
      rects.enter().append("rect")
        ///attributes we want to set immediately
        .attr("x", d=> x(d.name))        
        .attr("width", x.bandwidth)        
        .attr("fill", "grey")
        .attr("y", HEIGHT)  
        // attributes we want to gradually set in transition
        .transition().duration(500)
          .attr("y", d=> y(d.height))
          .attr("height", d => HEIGHT- y(d.height))
  }
};