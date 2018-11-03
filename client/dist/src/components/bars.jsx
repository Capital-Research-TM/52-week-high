import React from 'react';
import CurrentPrice from './currentPrice.jsx';
import FiftyTwoWeekInfo from './fiftyTwoWeekInfo.jsx';
import AverageTag from './averageTag.jsx';
import ShowBarInfo from './showBarInfo.jsx';
import CurrentPriceBar from './CurrentPriceBar.jsx';
import NormalBar from './normalBar.jsx';
import AverageBar from './averageBar.jsx';

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
      averageTag: 0,
      isToggleOn: false,
      showPrice: 0,
      showVolume: 0,
      showCompanyName: ''
    }
    this.handleOnClick = this.handleBarOnClick.bind(this);
    this.handleTableOnClick = this.handleTableOnClick.bind(this);
  }
  componentDidMount(props) {
    axios.get('/company/11')
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
  handleBarOnClick(event) {
    console.log('target', event.prices);
    this.setState({
      isToggleOn: true,
      showCompanyName: 'Lester',
      showPrice: event.prices,
      showVolume: event.volume
    })
  }

  handleTableOnClick(event) {
    this.setState({
      isToggleOn: false
    })
  }

  render() {
    return (
      <div className={Styles.containGraphToBottomBar}>
          <ShowBarInfo handleTableOnClick={this.handleTableOnClick}
            isToggleOn={this.state.isToggleOn}
            showVolume={this.state.showVolume}
            showPrice={this.state.showPrice}
            showCompanyName={this.state.showCompanyName}
            />
        <div className={Styles.barContainer}>
          {this.state.data.map((el, index)=> {
            if (el.prices === this.state.currentPrice){
            return <CurrentPriceBar
                price={el.prices}
                maxHighlightBar={this.state.maxHighlightBar}
                leastHighlightBar={this.state.leastHighlightBar}
                barHighlight={this.state.barHighlight}
                barNoHighlight={this.state.barNoHighlight}
                volume={el.volume}
                />

            } else if (el.prices === this.state.averageTag) {

            return  <AverageBar
                price={el.prices}
                maxHighlightBar={this.state.maxHighlightBar}
                leastHighlightBar={this.state.leastHighlightBar}
                barHighlight={this.state.barHighlight}
                barNoHighlight={this.state.barNoHighlight}
                average={this.state.average}
                volume={el.volume}
                marketHours={this.state.marketHours}
                />

          } else {

          return  <NormalBar
              price={el.prices}
              maxHighlightBar={this.state.maxHighlightBar}
              leastHighlightBar={this.state.leastHighlightBar}
              barHighlight={this.state.barHighlight}
              barNoHighlight={this.state.barNoHighlight}
              volume={el.volume}
              marketHours={this.props.marketHours}
              />

            }
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