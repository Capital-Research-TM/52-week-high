import React from 'react';
import axios from 'axios';

const calculateAverage = (response) => {
  var total = 0;
  for (let i = 0; i < response.data.length; i++) {
    total += response.data[i].prices;
  }
  console.log(response.data);
  return total / response.data.length;
}

const findCurrentPrice = (response) => {
  var currentPrice = 0;
  for (let i = 0; i < response.data.length; i++) {
    if (response.data[i].dates === 29) {
      currentPrice = response.data[i].prices;
    }
  }
  console.log(currentPrice);
  return currentPrice;
}

class Bars extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        currentPrice: 0,
        average: 0,
        marketClosed: false,
      }
    }
    componentDidMount(props) {
      axios.get('/company/20')
        .then((response) => {
          let average = calculateAverage(response);
          let currentPrice = findCurrentPrice(response);
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
        var maxRedBar = this.state.currentPrice;
        var leastRedBar = this.state.average;
      } else {
        var maxRedBar = this.state.average;
        var leastRedBar = this.state.currentPrice;
      }
      return (
        <div className="barContainer">
      {this.state.data.map((el)=> {

        return <div className='bar'style={{height:`${el.volume}%`, backgroundColor: el.prices < maxRedBar && el.prices > leastRedBar ? '#f45531' : 'rgba(211, 211, 211, .5)' }} key={el._id} ></div>
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