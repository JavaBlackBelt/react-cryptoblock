import React, { Component } from "react";
import { RealTimeChartWidget } from "react-tradingview-widgets";

class LiveChart extends Component {
  render() {
    return (
      <chart className="App-chart">
        <p1>Market Analysis</p1>
        {
          <RealTimeChartWidget
            position="initial"
            symbol="BITFINEX:ETHUSD"
            locale="en"
            interval="D"
            theme="Dark"
            margin="initial"
            type="1"
          />
        }
      </chart>
    );
  }
}

export default LiveChart;
