import React from 'react';
import styles from '../css/normalBar.css';

const NormalBar = (props) => {
  console.log(props.price);
  return (
    <div className={styles.bar}
      key={props.price}
    style={{height:`${props.volume}%`, backgroundColor: props.price <= props.maxHighlightBar && props.price >= props.leastHighlightBar ? props.barHighlight : props.barNoHighlight }} >
  </div>)
}

export default NormalBar;