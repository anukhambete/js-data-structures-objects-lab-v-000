// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newdriver = Object.assign({}, driver);
  delete newdriver.name;
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return 
}
