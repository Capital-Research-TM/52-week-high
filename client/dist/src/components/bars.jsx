import React from 'react';
import axios from 'axios';

class Bars extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
      }
    }
    componentDidMount(props) {
      axios.get('/company/6')
        .then((response) => {
          console.log(response.data);
          console.log(response.data[0].volume);
          this.setState({
            data: response.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
    render() {
      return (
        <div className="barContainer">
      {this.state.data.map((el)=> {
        return <div className='bar'style={{height:`${el.volume}%`}} key={el._id}></div>
      })
  } <
  /div>
)

}
}

export default Bars;



//////info////////////
//needs 30 bars of info
// use test data
//cosntant width
//contant spacing
//dynamic for phones and screens
//width 678
//height 218
//bars width: 11
//height 0 - 100
//color of bars #f45531