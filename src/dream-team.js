const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) 
    return false;
  
  if (!Array.isArray(members))
    return false;
  
  let newarr = [];
  for (let el of members) {
    if (typeof el === "string")
      newarr.push(el)
  }

  let str = '';
  for (let el of newarr) {
    str += el.split(' ').join('').slice(0,1);
  }
  
  let str2 = '';
  str2 = str.toUpperCase().split('').sort().join('');
  return str2;
};
