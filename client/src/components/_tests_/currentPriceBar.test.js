import React from 'react';
import CurrentPriceBar from "../currentPriceBar.jsx";
import {
  shallow
} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

describe('should display one element currectly', () => {

  const wrapper = shallow(
    <CurrentPriceBar
      price={300}
      maxHighlightBar={200}
      leastHighlightBar={400}
      barHighlight={'white'}
      barNoHighlight={'black'}
      volume={40}
      />)

  test('should accurately display', () => {
    expect(wrapper.find('#target')).toHaveLength(1);
  });
});