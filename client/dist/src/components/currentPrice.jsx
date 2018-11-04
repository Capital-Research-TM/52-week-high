import React from 'react';
import styles from '../css/currentprice.css';
import Percentage from './pricePercentageAboveBelow.jsx';

const CurrentPrice = (props) => {
    return (
        <div className={styles.overlay}>
          {props.data.map((el) =>
            {
            if (el.prices === props.price) {
              return <div className={props.marketUp ? styles.sphereHigh : styles.sphereLow} id={styles.e} >
                <Percentage className={styles.percentage} price={props.price} average={props.average} percent={props.percent} />
                <div className={props.marketUp ? styles.lineHigh : styles.lineLow}>
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