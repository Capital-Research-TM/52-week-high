import React from 'react';
import styles from '../css/averageBar.css';
import AverageTag from './averageTag.jsx';

class AverageBar extends React.Component {
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
    return (
      <div className={this.state.hover ? styles.targetTrue : styles.target}
          onMouseOver={this.handleOnHover} onMouseLeave={this.handleOnMouseLeave}
        key={this.props.price}
        style={{height:`${this.props.volume}%`, backgroundColor: this.props.price <= this.props.maxHighlightBar && this.props.price >= this.props.leastHighlightBar ? highLight : noHighlight,
        borderStyle: this.state.hover ? 'solid' : 'hidden', borderColor: this.props.marketHours ? 'black' : 'white' }}
          style={{color: this.props.marketHours ? 'black' : 'white'}}>
          <span style={{position: 'relative', transform: 'translateY(-${this.props.volume}%)', bottom: '20px'}}>price: {this.props.price} </span><span style={{position: 'absolute', transform: 'transformY(${this.props.volume}%)', bottom: '-20px'}}> volume: {this.props.volume}</span>
      <AverageTag average={this.props.average} marketHours={this.props.marketHours}/>
      </div>)
  }
}

export default AverageBar;