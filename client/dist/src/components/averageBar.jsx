import React from 'react';
import styles from '../css/averageBar.css';
import AverageTag from './averageTag.jsx';

const AverageBar = (props) => {

  return (
    <div className={styles.bar}

      key={props.price}
    style={{height:`${props.volume}%`, backgroundColor: props.price <= props.maxHighlightBar && props.price >= props.leastHighlightBar ? props.barHighlight : props.barNoHighlight }}
    >
    <AverageTag average={props.average} marketHours={props.marketHours} />
  </div>)
}

export default AverageBar;