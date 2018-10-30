import React from 'react';
import Bars from './bars.jsx';
import FiftyTwoWeekInfo from './fiftyTwoWeekInfo.jsx';
import CurrentPrice from './currentPrice.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'true',
    }
  }


  render() {
    return (
      <div className="graphHouse">
        <CurrentPrice />
        <div><h2>Price Paid on Robinhood</h2></div>
        <div>
        <Bars />
        <FiftyTwoWeekInfo />
        </div>
      </div>
    )
  }
}

export default App;