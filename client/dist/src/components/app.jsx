import React from 'react';
import Bars from './bars.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'true',
    }
  }
  render() {
    return (
      <div className="graphHouse">
        <div>
          {'we are typed in jsx'}
        </div>
        <Bars />
      </div>
    )
  }
}

export default App;