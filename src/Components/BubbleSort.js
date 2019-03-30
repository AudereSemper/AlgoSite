import React, { Component } from 'react';
import Form from './Form';
import Chart from './Chart';
import Documentation from './Documentation';


class BubbleSort extends Component {

  state = {
    chartSize: [],
  }

  getPropsFromChild = (array) => {
    this.setState({
      chartSize: array,
    }, () => console.log(this.state.chartSize))
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">BubbleSort</h1>
        <Form getPropsFromChild={this.getPropsFromChild}/>
        <Documentation />
        <Chart columns={this.state.chartSize}/>
      </div>
    );
  }
}

export default BubbleSort;