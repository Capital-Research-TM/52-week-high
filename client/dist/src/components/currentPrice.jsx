import React from 'react';
import styles from '../css/currentprice.css';
import Percentage from './pricePercentageAboveBelow.jsx';

const CurrentPrice = (props) => {
    return (
        <div className={styles.overlay}>
          {props.data.map((el) =>
            {
            if (el.prices === props.price) {
              return <div className={props.price > props.average  ? styles.sphereHigh : styles.sphereLow} >
                <Percentage id={styles.percentage} price={props.price} average={props.average} percent={props.percent} />
                <div id={props.price > props.average  ? styles.lineHigh : styles.lineLow}>
                </div>
              </div>
}
return <div className={styles.sphere}></div>

})
} <
/div>
)
}


export default CurrentPrice;