import React from 'react';
import styles from '../css/averageTag.css';

const AverageTag = (props) => {
  return (
    <div className={styles.averageTag}>
      <span className={styles.averageText}>Average Price</span>
      <span>Paid</span>
      <span className={styles.averageNumber}>{props.average}</span>
    </div>
  )
}

export default AverageTag;
