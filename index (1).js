function getavg(x, y){
  return (x + y) / 2;
}

function compare(x, y){
  if (x > y){
    console.log("car 1 is faster");
  } else if (x < y){
    console.log("car 2 is faster");
  } else {
    console.log("invalid");
  }
}

const car1 = {
  topspeed: 100,
  lowestspeed: 0,
};
car1.avgspeed = getavg(car1.topspeed, car1.lowestspeed);

const car2 = {
  topspeed: 70,
  lowestspeed: 40,
};
car2.avgspeed = getavg(car2.topspeed, car2.lowestspeed);

compare(car1.avgspeed, car2.avgspeed);
