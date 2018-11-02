import React from 'react';
import styles from '../css/CurrentPriceBar.css';

const CurrentPriceBar = (props) => {
  return (
    <div id={styles.target}
      key={props.price}
      style={{height:`${props.volume}%`, backgroundColor: props.price <= props.maxHighlightBar && props.price >= props.leastHighlightBar ? props.barHighlight : props.barNoHighlight }} >
        <div></div>
    </div>
  )
}

export default CurrentPriceBar;