import {
  calculateAverage,
  findCurrentPrice,
  maxHighLightBarColor,
  leastHighlightBarColor,
  barNoHighlightColor,
  barHighlightColor,
  percentageDiff,
  findNextHighestNumber
} from '../utilities/bars.js';

test('combines numbers in {data: [{prices: 3}, {prices: 3}, {prices: 3}]} then divides by length of data (3) to return string of average (3) ', () => {
  expect(calculateAverage({data: [{prices: 3}, {prices: 3}, {prices: 3}]})).toBe("3.00");
})

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
