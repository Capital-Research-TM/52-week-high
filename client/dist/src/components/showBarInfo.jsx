import React from 'react';
import styles from '../css/showBarInfo.css';

const ShowBarInfo = (props) => {
  if (props.isToggleOn) {
    return (
      <div className={styles.showInfo} onClick={props.handleTableOnClick}>
        <span className={styles.showInfoRow}>Price: {props.showPrice}</span><span className={styles.showInfoRow}>Volume: {props.showVolume}</span></div>
    )
  }
  return (<div></div>)

}

export default ShowBarInfo;