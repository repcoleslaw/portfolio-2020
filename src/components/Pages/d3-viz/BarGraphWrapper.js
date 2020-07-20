import React, { useRef, useEfect, Component } from 'react';

import BarGraph from './D3BarGraph';


export default class BarGraphWrapper extends Component {

  state = {
    data : ""
  };

  barRef =  React.createRef();

  componentDidMount(){
    this.setState({
      chart: new BarGraph(this.barRef.current)
    }); 
  }

  shouldComponentUpdate(){
    return false
  };

  static getDerivedStateFromProps(props, state){
    this.state.chart.update(state.dataName)
  }

  render() {
    return (
      <div ref={this.barRef}></div>
    )
  }
}


