import React from 'react';
import styles from '../css/fiftyTwoWeekInfo.css'

const FiftyTwoWeekInfo = (props) => {
  return (
    <div className={styles.fiftyTwoWeek}>
      <div className={styles.lowest}>
        <span>52 week low </span>
        <span>{props.lowestPrice.toFixed(2)}</span>
      </div>
      <div className={styles.highest}>
        <span>52 week high</span>
        <span>{props.highestPrice.toFixed(2)}</span>
        </div>
      </div>
  )
}

export default FiftyTwoWeekInfo;