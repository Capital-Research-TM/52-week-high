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
        <div>
        <CurrentPrice />
        <Bars />
        <FiftyTwoWeekInfo />
        </div>
      </div>
    )
  }
}

export default App;