import React from 'react';
import axios from 'axios';

class Bars extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        dummyBarData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      }
    }
    componentDidMount(props) {
      axios.get('/company')
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