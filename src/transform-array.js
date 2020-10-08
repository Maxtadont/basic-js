const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  const controls = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]
  
  let res = [];
  if (!array && array.length === 0 && !Array.isArray(array))
    res = []
  else {
    for (let i = 0; i < array.length; i++){      
      switch (array[i]) {
        case controls[0]: 
          if (i < array.length) 
            i += 2; 
          break;
        case controls[1]:
          if (i > 0)
            res.pop();
          break;
        case controls[2]:
          if (i < array.length-1)
            res.push(array[i+1]);
          break;
        case controls[3]:
          if (i > 0)
            res.push(array[i-1]);
          break;
        default: 
            res.push(array[i]);
          break;
      }
    }
  }
  console.log(res);
  return res;
};
