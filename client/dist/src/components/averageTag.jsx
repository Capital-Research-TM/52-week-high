import React from 'react';
import styles from '../css/averageTag.css';

const AverageTag = (props) => {
  return (
    <div className={styles.averageTag} style={{color: props.marketHours ? 'rgb(256,256,256)' : '#fff'}} >
      <span className={styles.averageText}>Average Price</span>
      <span className={styles.averageText}>Paid</span>
      <span className={styles.averageNumber}>{props.average}</span>
    </div>
  )
}

export default AverageTag;