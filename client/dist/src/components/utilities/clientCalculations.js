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

const marketIsOpen = () => {
  var date = new Date();
  var currentHour = date.getHours();
  if (currentHour > 15 && currentHour < 6) {
    return true;
  } else {
    return false;
  }
}

export default marketIsOpen;
