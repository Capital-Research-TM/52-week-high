import Faker from 'faker';

const marketIsOpen = () => {
  const date = new Date();
  const currentHour = date.getHours();
  if (currentHour > 6 && currentHour < 15) {
    return true;
  } else {
    return false;
  }
}

const marketIsUp = ()=> {
  return Faker.random.boolean();
}




export {marketIsOpen,
marketIsUp};
