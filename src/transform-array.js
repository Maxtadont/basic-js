const CustomError = require("../extensions/custom-error");

module.exports = function transform(array = []) {
  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
 
  let res = []; let j = 0;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case controls[0]:
        if (i < (array.length-1)) {
          res.push(" ");
          i++;
          j++;
        }
        break;

      case controls[1]:
        if (res.length > 0) {
          res.pop();
          j--;
        }
        break;

      case controls[2]:
        if (array[i+1] != undefined) {
          res.push(array[i+1]);
          j++;
        }
        break;
      
      case controls[3]:
        if (res.length > 0)
        if (res[j-1] !== " ") {
          res.push(res[j-1]);
          j++;
        }
        break;

      default:
        res.push(array[i]);
        j++;
        break;
    }
  }
  res = res.filter(a => a !== " ");
  return res;
};
