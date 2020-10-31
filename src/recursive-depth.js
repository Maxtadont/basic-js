const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let newdepth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newdepth = this.calculateDepth(arr[i]) + 1;
        if (depth < newdepth)
          depth = newdepth;
      }
    }
    return depth;
  }
};