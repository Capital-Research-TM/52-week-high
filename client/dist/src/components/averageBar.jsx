import React from 'react';
import styles from '../css/averageBar.css';
import AverageTag from './averageTag.jsx';

const AverageBar = (props) => {
  const highLight = props.marketUp ? '#21ce99' : '#f45531';
  const noHighlight = props.marketHours ? 'rgba(211, 211, 211, .5)' : '#0e0d0d';
  return (
    <div className={styles.bar}

      key={props.price}
    style={{height:`${props.volume}%`, backgroundColor: props.price <= props.maxHighlightBar && props.price >= props.leastHighlightBar ? highLight : noHighlight }}
    >
    <AverageTag average={props.average} marketHours={props.marketHours} />
  </div>)
}

export default AverageBar;