import React from 'react';

class CurrentPrice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="overlay">
        <div className="sphere"></div>
      </div>
    )
  }
}

export default CurrentPrice;