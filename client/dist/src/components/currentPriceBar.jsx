import React from 'react';
import styles from '../css/CurrentPriceBar.css';
import AverageTag from './averageTag.jsx';

const CurrentPriceBar = (props) => {
  const highLight = props.marketUp ? '#21ce99' : '#f45531';
  const noHighlight = props.marketHours ? 'rgba(211, 211, 211, .5)' : '#0e0d0d';
  if (props.price === props.average) {
    return (
      <div id={styles.target}

        key={props.price}
        style={{height:`${props.volume}%`, backgroundColor:  props.marketUp ? '#21ce99' : '#f45531' }} >
          <AverageTag average={props.average} marketHours={props.marketHours}/>
      </div>
    )
  }
  return (
    <div id={styles.target}
      key={props.price}
      style={{height:`${props.volume}%`, backgroundColor:  props.marketUp ? '#21ce99' : '#f45531' }} >
        <div></div>
    </div>)
}

export default CurrentPriceBar;