const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position === "number") {
      this.chain.splice(position-1, 1); 
    }
    else {
      this.chain = [];
      throw "Error";
    }
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
     let chainString = ''

    for (let i = 0; i < this.chain.length; i++) {
      if (i < this.chain.length-1)
        chainString += "( " + this.chain[i] + " )" + "~~";
      else
        chainString += "( " + this.chain[i] + " )";
    }
    this.chain = [];
    return chainString
  }
};

module.exports = chainMaker;
