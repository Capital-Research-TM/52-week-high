const calculateAverage = (response) => {
  let total = 0;
  for (let i = 0; i < response.data.length; i++) {
    total += response.data[i].prices;
  }
  return (total / response.data.length).toFixed(2);
}

const findCurrentPrice = (response) => {
  let currentPrice = 0;
  for (let i = 0; i < response.data.length; i++) {
    if (response.data[i].dates === 29) {
      currentPrice = response.data[i].prices;
    }
  }
  return currentPrice;
}

const maxHighLightBarColor = (currentPrice, average) => {
  if (currentPrice > average) {
    const maxHighlightBar = currentPrice;
    return maxHighlightBar;
  }
  const maxHighlightBar = average;
  return maxHighlightBar;
}

const leastHighlightBarColor = (currentPrice, average) => {
  if (currentPrice > average) {
    const leastHighlightBar = average;
    return leastHighlightBar;
  }
  const leastHighlightBar = currentPrice;
  return leastHighlightBar;
}


const percentageDiff = (currentPrice, average) => {
  if (currentPrice < average) {
    const percent = JSON.stringify(Math.round(100 - (currentPrice / average) * 100));
    return `-${percent}%`;
  }
  const percent = JSON.stringify(Math.round( 100 - (average / currentPrice) * 100));
  return `${percent}%`;
}


const findNextHighestNumber = (arr, average) => {

let num = 0;
const innerFunc = (checkArr) => {
  if (checkArr.length === 1) {
    num = checkArr[0].prices;
    return;
  }
  let closestNum = 0;
  let midPoint = Math.floor(checkArr.length/2);
  if (checkArr[midPoint].prices === average) {
    num = midPoint;
  } else if (checkArr[midPoint].prices < average) {
    let newArr = checkArr.slice(midPoint)
    innerFunc(newArr);
  } else {
    let newArr = checkArr.slice(0, midPoint);
    innerFunc(newArr);
  }
}
innerFunc(arr);
return num;
}


export {
  calculateAverage,
  findCurrentPrice,
  maxHighLightBarColor,
  leastHighlightBarColor,
  percentageDiff,
  findNextHighestNumber
};
