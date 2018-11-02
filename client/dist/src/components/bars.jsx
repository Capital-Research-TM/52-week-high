import React from 'react';
import CurrentPrice from './currentPrice.jsx';
import FiftyTwoWeekInfo from './fiftyTwoWeekInfo.jsx';
import AverageTag from './averageTag.jsx';

import {
  calculateAverage,
  findCurrentPrice,
  maxHighLightBarColor,
  leastHighlightBarColor,
  barNoHighlightColor,
  barHighlightColor,
  percentageDiff,
  findNextHighestNumber
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
      highestPrice: 100,
      percentageDiff: '0',
      averageTag: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  componentDidMount(props) {
    axios.get('/company/13')
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
          highestPrice: response.data[response.data.length - 1].prices,
          percentageDiff: percentageDiff(currentPrice, average),
          averageTag: findNextHighestNumber(response.data, average)
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  handleOnClick(event) {
    console.log('target', event);
  }
  render() {
    console.log("next:", this.state.averageTag);
    return (
      <div className={Styles.containGraphToBottomBar}>
        <div className={Styles.barContainer}>
          {this.state.data.map((el, index)=> {
            if (el.prices === this.state.currentPrice){
              return <div id={Styles.target}
                onClick={()=> {this.handleOnClick(el)}}
                style={{height:`${el.volume}%`, backgroundColor: el.prices <= this.state.maxHighlightBar && el.prices >= this.state.leastHighlightBar ? this.state.barHighlight : this.state.barNoHighlight }}
                key={el._id} >
                  <div></div>
              </div>
            } else if (el.prices === this.state.averageTag) {
              return <div className={Styles.bar}
                onClick={()=> {this.handleOnClick(el)}}
                style={{height:`${el.volume}%`, backgroundColor: el.prices <= this.state.maxHighlightBar && el.prices >= this.state.leastHighlightBar ? this.state.barHighlight : this.state.barNoHighlight }}
                key={el._id}>
                <AverageTag average={this.state.average} height={el.volume}/>
              </div>
            }
            return <div className={Styles.bar}
                onClick={()=> {this.handleOnClick(el)}}
              style={{height:`${el.volume}%`, backgroundColor: el.prices <= this.state.maxHighlightBar && el.prices >= this.state.leastHighlightBar ? this.state.barHighlight : this.state.barNoHighlight }}
              key={el._id} >
            </div>
            })
          }
        </div>
    <CurrentPrice
      data={this.state.data}
      price={this.state.currentPrice}
      average={this.state.average}
      percent={this.state.percentageDiff}/>
    <FiftyTwoWeekInfo
      lowestPrice={this.state.lowestPrice}
       highestPrice={this.state.highestPrice}/>
  </div>
    )
  }
}

export default Bars;