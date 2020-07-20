import React, {Component} from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends Component{
  chartRef =    React.createRef()


  componentDidMount(){
    new D3Chart(this.chartRef.current);
  }

  render(){
    return(<div ref={this.chartRef}></div>)
  }
}

export default ChartWrapper;
