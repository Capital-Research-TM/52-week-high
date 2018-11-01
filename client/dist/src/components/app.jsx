import React from 'react';
import Bars from './bars.jsx';
import axios from 'axios';
import styles from '../css/app.css';
import {
  marketIsOpen
} from './utilities/app.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marketIsOpen: true
    }
  }

  componentDidMount() {
    let marketTime = marketIsOpen();
    this.setState({
      marketIsOpen: marketTime
    })
  }

  render() {
    return (
      <div className={styles.graphHouse} style={{backgroundColor: this.state.marketIsOpen ? '#fff' : 'rgb(27, 27, 29)'}}>
        <div><h2 style={{color: this.state.marketIsOpen ? '#0e0d0d' : '#fff'}}>Price Paid on Robinhood</h2></div>
        <Bars marketIsOpen={this.state.marketIsOpen}/>
      </div>
    )
  }
}

export default App;