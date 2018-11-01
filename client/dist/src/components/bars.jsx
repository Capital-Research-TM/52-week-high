import React from 'react';
import CurrentPrice from './currentPrice.jsx';
import FiftyTwoWeekInfo from './fiftyTwoWeekInfo.jsx';

import {
  calculateAverage,
  findCurrentPrice,
  maxHighLightBarColor,
  leastHighlightBarColor,
  barNoHighlightColor,
  barHighlightColor
} from './utilities/bars.js';

import axios from 'axios';
import Styles from '../css/bars.css';

class Bars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentPrice: 0,
      average: 0,
      marketHours: this.props.marketIsOpen,
      currentPriceIndex: false,
      maxHighlightBar: 'white',
      leastHighlightBar: 'black',
      barNoHighlight: 'black',
      barHighlight: 'white',
      lowestPrice: 0,
      highestPrice: 100
    }
  }
  componentDidMount(props) {
    axios.get('/company/14')
      .then((response) => {
        let average = calculateAverage(response);
        let currentPrice = findCurrentPrice(response);
        this.setState({
          data: response.data,
          currentPrice,
          average,
          maxHighlightBar: maxHighLightBarColor(currentPrice, average),
          leastHighlightBar: leastHighlightBarColor(currentPrice, average),
          barNoHighlight: barNoHighlightColor(this.state.marketHours, currentPrice, average),
          barHighlight: barHighlightColor(this.state.marketHours, currentPrice, average),
          lowestPrice: response.data[0].prices,
          highestPrice: response.data[response.data.length - 1].prices
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className={Styles.containGraphToBottomBar}>
        <div className={Styles.barContainer}>
          {this.state.data.map((el, index)=>
            {
            if (el.prices === this.state.currentPrice){
              return <div id={Styles.target} style={{height:`${el.volume}%`, backgroundColor: el.prices <= this.state.maxHighlightBar && el.prices >= this.state.leastHighlightBar ? this.state.barHighlight : this.state.barNoHighlight }} key={el._id} >
                  <div></div>
              </div>
            }
            return <div className={Styles.bar} style={{height:`${el.volume}%`, backgroundColor: el.prices <= this.state.maxHighlightBar && el.prices >= this.state.leastHighlightBar ? this.state.barHighlight : this.state.barNoHighlight }} key={el._id} >
            </div>
            })
          }
        </div>
    <CurrentPrice data={this.state.data} price={this.state.currentPrice} average={this.state.average}/>
    <FiftyTwoWeekInfo lowestPrice={this.state.lowestPrice} highestPrice={this.state.highestPrice}/>
  </div>
    )


  }
}

export default Bars;