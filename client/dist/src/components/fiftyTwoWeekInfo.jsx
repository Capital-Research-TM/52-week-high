import React from 'react';

class FiftyTwoWeekInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lowest: 0,
      highest: 100,
    }
  }
render() {
  return (
    <div className='fiftyTwoWeek'>
      <div className="lowest">
        <span>52 week low </span>
        <span>{this.state.lowest}</span>
      </div>
      <div className="highest">
        <span>52 week high</span>
        <span>{this.state.highest}</span>
        </div>
      </div>
    )
  }
}

export default FiftyTwoWeekInfo;
