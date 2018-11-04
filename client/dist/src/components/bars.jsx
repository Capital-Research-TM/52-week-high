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
      lowestPrice: 0,
      highestPrice: 100,
      percentageDiff: '0',
      averageTag: 0,
      isToggleOn: false,
      showPrice: 0,
      showVolume: 0,
      showCompanyName: '',
      marketUp: this.props.marketUp
    }
    this.handleOnClick = this.handleBarOnClick.bind(this);
    this.handleTableOnClick = this.handleTableOnClick.bind(this);
  }
  componentDidMount(props) {
    axios.get('/company/8')
      .then((response) => {
        let average = calculateAverage(response);
        let currentPrice = findCurrentPrice(response);
        this.setState({
          data: response.data,
          currentPrice,
          average,
          maxHighlightBar: maxHighLightBarColor(currentPrice, average),
          leastHighlightBar: leastHighlightBarColor(currentPrice, average),
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
            marketUp={this.state.marketUp}
            />
        <div className={Styles.barContainer}>
          {this.state.data.map((el, index)=> {
            if (el.prices === this.state.currentPrice){
            return <CurrentPriceBar
                price={el.prices}
                average={this.state.average}
                maxHighlightBar={this.state.maxHighlightBar}
                leastHighlightBar={this.state.leastHighlightBar}
                volume={el.volume}
                marketHours={this.state.marketHours}
                marketUp={this.state.marketUp}
                />

            } else if (el.prices === this.state.averageTag) {

            return  <AverageBar
                price={el.prices}
                maxHighlightBar={this.state.maxHighlightBar}
                leastHighlightBar={this.state.leastHighlightBar}
                average={this.state.average}
                volume={el.volume}
                marketHours={this.state.marketHours}
                marketUp={this.state.marketUp}
                />

          } else {

          return  <NormalBar
              price={el.prices}
              maxHighlightBar={this.state.maxHighlightBar}
              leastHighlightBar={this.state.leastHighlightBar}
              volume={el.volume}
              marketHours={this.props.marketHours}
              marketUp={this.state.marketUp}
              />

            }
          })
        }
        </div>
    <CurrentPrice
      data={this.state.data}
      price={this.state.currentPrice}
      average={this.state.average}
      percent={this.state.percentageDiff}
      marketUp={this.state.marketUp}/>
    <FiftyTwoWeekInfo
      lowestPrice={this.state.lowestPrice}
      marketHours={this.props.marketHours}
       highestPrice={this.state.highestPrice}
       marketUp={this.state.marketUp}/>
   </div>
    )

  }
}

export default Bars;