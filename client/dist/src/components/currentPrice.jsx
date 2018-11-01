import React from 'react';
import styles from '../css/currentprice.css';

class CurrentPrice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.horizon}></div>
        <div className={styles.sphere}></div>
      </div>
    )
  }
}

export default CurrentPrice;