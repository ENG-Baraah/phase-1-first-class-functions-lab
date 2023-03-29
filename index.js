// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2, drivers.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor) {
  return function (value) {
    return factor * value;
  };
}

const fareDoubler = function (value) {
  return createFareMultiplier(2)(value);
};

const fareTripler = function (value) {
  return createFareMultiplier(3)(value);
};

function selectDifferentDrivers(arr, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(arr);
}
