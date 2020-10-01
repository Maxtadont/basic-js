//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  //throw new CustomError('Not implemented');
  let catEars = '^^';
  let cntCats = 0;

  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (catEars === backyard[i][j])
        cntCats++;
    }
  }
  return parseFloat(cntCats);
};
