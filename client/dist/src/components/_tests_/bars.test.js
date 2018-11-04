import React from 'react';
import Bars from '../bars.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Bars />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});