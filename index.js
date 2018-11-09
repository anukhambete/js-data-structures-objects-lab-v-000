// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  driver[key] = value;
  return driver;
}
