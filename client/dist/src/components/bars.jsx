import React from 'react';
import axios from 'axios';
import Styles from '../css/bars.css';


const calculateAverage = (response) => {
  let total = 0;
  for (let i = 0; i < response.data.length; i++) {
    total += response.data[i].prices;
  }
  return total / response.data.length;
}

const findCurrentPrice = (response) => {
  var currentPrice = 0;
  for (let i = 0; i < response.data.length; i++) {
    if (response.data[i].dates === 29) {
      currentPrice = response.data[i].prices;
    }
  }
  return currentPrice;
}

const marketIsOpen = () => {
  const date = new Date();
  const currentHour = date.getHours();
  if (currentHour > 15 && currentHour < 6) {
    return true;
  } else {
    return false;
  }
}

class Bars extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        currentPrice: 0,
        average: 0,
        marketHours: this.props.marketIsOpen,
      }
    }
    componentDidMount(props) {
      axios.get('/company/10')
        .then((response) => {
          let average = calculateAverage(response);
          let currentPrice = findCurrentPrice(response);
          // let isMarketOpen = marketIsOpen();
          this.setState({
            data: response.data,
            currentPrice,
            average
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }


    render() {
        if (this.state.currentPrice > this.state.average) {
          var maxHighlightBar = this.state.currentPrice;
          var leastHighlightBar = this.state.average;
        } else {
          var maxHighlightBar = this.state.average;
          var leastHighlightBar = this.state.currentPrice;
        }
        var barNoHighlight = '';
        var barHighlight = '';
        if (this.state.marketHours) {
          barHighlight = '#f45531';
          barNoHighlight = 'rgba(211, 211, 211, .5)';
        } else if (!this.state.marketHours && this.state.currentPrice > this.state.average) {
          barHighlight = '#21ce99';
          barNoHighlight = '#0e0d0d';
        } else {
          barHighlight = '#f45531';
          barNoHighlight = '#0e0d0d';
        }
        return (
            <div className={Styles.barContainer}>
              {this.state.data.map((el)=> {
                return <div className={Styles.bar} style={{height:`${el.volume}%`, backgroundColor: el.prices < maxHighlightBar && el.prices > leastHighlightBar ? barHighlight : barNoHighlight }} key={el._id} ></div>
              })
            } <
            /div>
          )
      }
}

export default Bars;



//////info////////////
//needs 30 bars of info
// use test data
//cosntant width
//contant spacing
//dynamic for phones and screens
//width 678
//height 218
//bars width: 11
//height 0 - 100
//color of bars #f45531