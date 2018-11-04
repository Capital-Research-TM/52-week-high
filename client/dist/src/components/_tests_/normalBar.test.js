import React from 'react';
import Bars from "../normalBar.jsx";
import {
  shallow
} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

const data = [{

    id: 1,
    company: 'Love',
    prices: 230,
    volume: 25,
    dates: 1

  },
  {
    id: 1,
    company: 'Love',
    prices: 400,
    volume: 30,
    dates: 2
  },
  {
    id: 1,
    company: 'Love',
    prices: 200,
    volume: 31,
    dates: 3
  }
]


test('should render bar with hover functionality', () => {
  shallow(<Bars />);
})

describe('should render correct amount of bars to the dom', () => {
  const wrapper = shallow(
    <Bars
  price={200}
  maxHighlightBar={300}
  leastHighlightBar={100}
  barHighlight={'black'}
  barNoHighlight={'white'}
  volume={30}
  marketHours={true} />)

  test(' should accurately display element', () => {
    expect(wrapper.find('.bar')).toHaveLength(1);
  });

  test('should change state on hover event', () => {
    expect(wrapper.state("hover")).toBe(false);

    wrapper.simulate("mouseleave");

    expect(wrapper.state("hover")).toBe(false);

    wrapper.simulate("mouseover");

    expect(wrapper.state("hover")).toBe(true);
  });

})