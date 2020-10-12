const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  inoptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: ''
  }
  
  let res = '';

  for (let name in options) {
    if (name === "repeatTimes" && typeof options[name] !== "number")
      continue;  
    if (name === "additionRepeatTimes" && typeof options[name] !== "number")
      continue; 
    inoptions[name] = options[name];
  }

  for (let i = 0; i < inoptions.repeatTimes; i++) {
    res += str;
    for (let j = 0; j < inoptions.additionRepeatTimes; j++) {
      res += inoptions.addition;
      if (j < inoptions.additionRepeatTimes-1)
        res += inoptions.additionSeparator;
    }
    if (i < inoptions.repeatTimes-1)
      res += inoptions.separator;
  }

  return res;
};
  