const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(data) {
  let result = 0;
  if (typeof data !== "string" || data.length === 0 || data <= 0 || data > 15 || !parseFloat(data)) 
    result = false;
  else
    result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(data)) * HALF_LIFE_PERIOD / 0.693);
  return result;
};
