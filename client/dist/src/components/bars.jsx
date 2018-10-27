import React from 'react';

class Bars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      barData: ['1','2','3','4','5','6','7','8','9','10', '11', '12','13','14','15','16','17','18','19','20'],
    }
  }
  render() {
    return(
      <div className="barContainer">
      {this.state.barData.map((el)=> {
        return <div className='bar'style={{height:`${el}%`}} key={el}></div>
      })}
      </div>
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
