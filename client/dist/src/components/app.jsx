import React from 'react';
import Bars from './bars.jsx';
import FiftyTwoWeekInfo from './fiftyTwoWeekInfo.jsx';
import CurrentPrice from './currentPrice.jsx';
import axios from 'axios';
import styles from '../css/app.css';


const marketIsOpen = () => {
  var date = new Date();
  var currentHour = date.getHours();
  console.log(currentHour);
  if (currentHour > 6 && currentHour < 15) {
    return true;
  } else {
    return false;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marketIsOpen: marketIsOpen(),
    }
  }


  render() {
    return (
      <div className="graphHouse" style={{backgroundColor: this.state.marketIsOpen ? '#fff' : 'rgb(27, 27, 29)'}}>
        <CurrentPrice />
        <div><h2 style={{color: this.state.marketIsOpen ? '#0e0d0d' : '#fff'}}>Price Paid on Robinhood</h2></div>
        <div>
        <Bars marketIsOpen={this.state.marketIsOpen}/>
        <FiftyTwoWeekInfo marketIsOpen={this.state.marketIsOpen}/>
        </div>
      </div>
    )
  }
}

export default App;