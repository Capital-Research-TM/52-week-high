import React from 'react';
import styles from '../css/currentPriceBar.css';
import AverageTag from './averageTag.jsx';

class CurrentPriceBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnHover(event) {
    this.setState({
      hover: true
    })
  }

  handleOnMouseLeave(event) {
    this.setState({
      hover: false
    })
  }

  render() {
    const highLight = this.props.marketUp ? '#21ce99' : '#f45531';
    const noHighlight = this.props.marketHours ? 'rgba(211, 211, 211, .5)' : '#0e0d0d';
    if (this.props.price === this.props.average) {
      return (
        <div className={this.state.hover ? styles.targetTrue : styles.target}
          onMouseOver={this.handleOnHover} onMouseLeave={this.handleOnMouseLeave}
          key={this.props.price}
          style={{height:`${this.props.volume}%`, backgroundColor:  this.props.marketUp ? '#21ce99' : '#f45531',
          borderStyle: this.state.hover ? 'solid' : 'hidden', borderColor: this.props.marketHours ? 'black' : 'white'}} >
          <AverageTag average={this.props.average} marketHours={this.props.marketHours}/>
        </div>
      )
    }
    return (
      <div className={this.state.hover ? styles.targetTrue : styles.target}
        onMouseOver={this.handleOnHover} onMouseLeave={this.handleOnMouseLeave}
        key={this.props.price}
        style={{height:`${this.props.volume}%`, backgroundColor:  this.props.marketUp ? '#21ce99' : '#f45531',
        borderStyle: this.state.hover ? 'solid' : 'hidden', borderColor: this.props.marketHours ? 'black' : 'white' }} >
        <div className={this.state.hover ? styles.hover : styles.hidden}
          style={{color: this.props.marketHours ? 'black' : 'white'}}>
          <span style={{ position: 'relative', transform: `translateY(-${this.props.volume}%)`, bottom: '20px'}}>price:
            {this.props.price}
          </span><span style={{position: 'absolute', transform: 'transformY(${this.props.volume}%)', bottom: '-20px'}}> volume: {this.props.volume}</span>
      </div>
      </div>)
  }
}

export default CurrentPriceBar;