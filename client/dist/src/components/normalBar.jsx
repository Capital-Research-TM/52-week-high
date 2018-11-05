import React from 'react';
import styles from '../css/normalBar.css';

class NormalBar extends React.Component {
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
    console.log('mrkethours', this.props.marketHours)
    const highLight = this.props.marketUp ? '#21ce99' : '#f45531';
    const noHighlight = this.props.marketHours ? 'rgba(211, 211, 211, .5)' : '#0e0d0d';
    return (
      <div className={this.state.hover ? styles.barTrue : styles.bar}
        key={this.props.price}
        onMouseOver={this.handleOnHover} onMouseLeave={this.handleOnMouseLeave}
        style={{height:`${this.props.volume}%`, backgroundColor: this.props.price <= this.props.maxHighlightBar && this.props.price >= this.props.leastHighlightBar ? highLight : noHighlight,
        borderStyle: this.state.hover ? 'solid' : 'hidden', borderColor: this.props.marketHours ? 'black' : 'white'  }} >
        <div className={this.state.hover ? styles.hover : styles.hidden}
          style={{color: this.props.marketHours ? 'black' : 'white'}}
          ><span style={{position: 'relative', transform: 'translateY(-${this.props.volume}%)', bottom: '20px'}}>price: {this.props.price} </span><span style={{position: 'absolute', transform: 'transformY(${this.props.volume}%)', bottom: '-20px'}}> volume: {this.props.volume}</span></div>
      </div>)

  }
}

export default NormalBar;