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
    return (
      <div className={styles.bar}
        key={this.props.price}
        onMouseOver={this.handleOnHover} onMouseLeave={this.handleOnMouseLeave}
        style={{height:`${this.props.volume}%`, backgroundColor: this.props.price <= this.props.maxHighlightBar && this.props.price >= this.props.leastHighlightBar ? this.props.barHighlight : this.props.barNoHighlight }} >
        <div className={this.state.hover ? styles.hover : styles.hidden}
          style={{color: this.props.marketHours ? 'black': 'white'}}
          ><span>price: {this.props.price} </span><span> volume: {this.props.volume}</span></div>
      </div>)

  }
}

export default NormalBar;