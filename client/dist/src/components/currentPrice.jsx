import React from 'react';
import styles from '../css/currentprice.css';
import Percentage from './pricePercentageAboveBelow.jsx';

const CurrentPrice = (props) => {
    return (
        <div className={styles.overlay}>
          {props.data.map((el) =>
            {
            if (el.prices === props.price) {
              return <div className={props.price > props.average  ? styles.sphereHigh : styles.sphereLow} style={{backgroundColor: props.marketUp  ? '#21ce99' : '#f45531' }} >
                <Percentage className={styles.percentage} marketUp={props.marketUp} price={props.price} average={props.average} percent={props.percent} />
                <div className={props.price > props.average  ? styles.lineHigh : styles.lineLow} style={{backgroundColor: props.marketUp  ? '#21ce99' : '#f45531'}}>
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