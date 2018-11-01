import React from 'react';
import styles from '../css/fiftyTwoWeekInfo.css'

class FiftyTwoWeekInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lowest: 0,
      highest: 100,
    }
  }
  render() {
    return (
      <div className={styles.fiftyTwoWeek}>
      <div className="lowest">
        <span>52 week low </span>
        <span>{this.state.lowest}</span>
      </div>
      <div className={styles.highest}>
        <span>52 week high</span>
        <span>{this.state.highest}</span>
        </div>
      </div>
    )
  }
}

export default FiftyTwoWeekInfo;