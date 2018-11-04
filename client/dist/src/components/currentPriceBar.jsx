import React from 'react';
import styles from '../css/CurrentPriceBar.css';
import AverageTag from './averageTag.jsx';

const CurrentPriceBar = (props) => {

  if (props.price === props.average) {
    return (
      <div id={styles.target}
        key={props.price}
        style={{height:`${props.volume}%`, backgroundColor: props.marketUp ? props.barHighlight : props.barNoHighlight,  }} >
          <AverageTag average={props.average} marketHours={props.marketHours}/>
      </div>
    )
  }
  return (
    <div id={styles.target}
      key={props.price}
      style={{height:`${props.volume}%`, backgroundColor: props.price <= props.maxHighlightBar && props.price >= props.leastHighlightBar ? (marketUp ?rops.barHighlight : props.barNoHighlight }} >
        <div></div>
    </div>)
}

export default CurrentPriceBar;