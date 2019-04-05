// Code your solution in this file!
const logDriverNames = function (drivers){
  drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, location){
  logDriverNames(drivers.filter(driver => driver.hometown.toUpperCase() === location.toUpperCase()))
}

const driversByRevenue = function(drivers){
  const arr = [...drivers];
  return arr.sort((d1, d2) => d1.revenue > d2.revenue );
}

const driversByName = function(drivers){
  const arr = [...drivers];
  return arr.sort((d1, d2) => d1.name.localeCompare(d2.name) );
}

const totalRevenue = function(drivers){
  return drivers.reduce((s, d) => { s = s||0; s += d.revenue; });
}
