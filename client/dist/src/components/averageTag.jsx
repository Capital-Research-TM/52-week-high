import React from 'react';
import styles from '../css/averageTag.css';

const AverageTag = (props) => {
  console.log(props.marketHours);
  return (
    <div className={styles.averageTag} style={{color: props.marketHours ? 'rgb(0,0,0)' : ' rgb(255,255,255)', top: '70px', transform: 'translateY(`-${props.volume}%`)'}} >
      <span className={styles.averageText}>Average Price</span>
      <span className={styles.averageText}>Paid</span>
      <span className={styles.averageNumber}>{props.average}</span>
    </div>
  )
}

export default AverageTag;