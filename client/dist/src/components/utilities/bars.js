const calculateAverage = (response) => {
  var total = 0;
  for (let i = 0; i < response.data.length; i++) {
    total += response.data[i].prices;
  }
  return total / response.data.length;
}

const findCurrentPrice = (response) => {
  var currentPrice = 0;
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

const barNoHighlightColor = (marketHours, currentPrice, average) => {
  let barNoHighlight = '';
  if (marketHours && currentPrice > average) {
    barNoHighlight = 'rgba(211, 211, 211, .5)';
  } else if (!marketHours && currentPrice < average) {
    barNoHighlight = 'rgba(211, 211, 211, .5)';
  } else if (!marketHours && currentPrice > average) {
    barNoHighlight = '#0e0d0d';
  } else {
    barNoHighlight = '#0e0d0d';
  }
  return barNoHighlight;
}

const barHighlightColor = (marketHours, currentPrice, average) => {
  let barHighlight = '';
  if (marketHours && currentPrice > average) {
    barHighlight = '#21ce99';
  } else if (!marketHours && currentPrice < average) {
    barHighlight = '#f45531';
  } else if (!marketHours && currentPrice > average) {
    barHighlight = '#21ce99';
  } else {
    barHighlight = '#f45531';
  }
  return barHighlight;
}

export {calculateAverage, findCurrentPrice, maxHighLightBarColor, leastHighlightBarColor, barNoHighlightColor, barHighlightColor};
