import React from 'react';
import styles from '../css/currentprice.css';

const CurrentPrice = (props) => {

  return (
    <div className={styles.overlay}>
      {props.data.map((el) =>
        {
        if (el.prices === props.price) {
          return <div className={props.price > props.average  ? styles.sphereHigh : styles.sphereLow} >
            <div id={props.price > props.average  ? styles.lineHigh : styles.lineLow}></div>
            </div>
        } else {
          return <div className={styles.sphere}></div>
        }
      })
      }
    </div>
  )
}


export default CurrentPrice;