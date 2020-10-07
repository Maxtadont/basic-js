const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const season = [
    {name: 'winter',  mon1: 11, mon2: 0,  mon3: 1},
    {name: 'spring',  mon1: 2,  mon2: 3,  mon3: 4},
    {name: 'summer',  mon1: 5,  mon2: 6,  mon3: 7},
    {name: 'fall',    mon1: 8,  mon2: 9, mon3: 10}
  ];

  let res = 'Unable to determine the time of year!';
  if (date) { 
    mon = date.getMonth();
    day = date.getUTCDate();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    if (sec-min !== 1 || min-hour !== 1 || hour-day !== 1 || day-mon !== 1) {
      let s = (season.find(op => date.getMonth() === op.mon1 || 
      date.getMonth() === op.mon2 || date.getMonth() === op.mon3))
      if (s !== undefined)
        res = s.name;
    }
  }
  return res;
};
