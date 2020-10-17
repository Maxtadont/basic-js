const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(direct) {
    if (direct === undefined || direct === true) 
      this.direct = true;
    else
      this.direct = false;
  }

  encrypt_decrypt(str, key, isCryptor) {
    const A_CODE = 65;
    const ALPABET_LENGTH = 26;

    let crypt_arr = [];
    let crypt_str = ""; 

    if (str == undefined || key == undefined) {
      throw new Error();
    }
    else {
      let keyString = key;
      keyString = key.padEnd(str.length, key).toUpperCase();
      let j = 0;  
      str = str.toUpperCase();
      
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= A_CODE && str.charCodeAt(i) <= A_CODE + ALPABET_LENGTH) { 
          if (isCryptor) {
            crypt_arr.push((str.charCodeAt(i) + keyString.charCodeAt(j)) % ALPABET_LENGTH);
            crypt_str += String.fromCharCode(crypt_arr[i] + A_CODE);
          }
          else {
            crypt_arr.push((str.charCodeAt(i) + ALPABET_LENGTH - keyString.charCodeAt(j)) % ALPABET_LENGTH);
            crypt_str += String.fromCharCode(crypt_arr[i] + A_CODE);  
          }
          j++;
        }
        else {
          crypt_arr.push(str[i]);
          crypt_str += str[i];
        }
      }

      if (!this.direct) {
        crypt_str = crypt_str.split('').reverse().join(''); 
      }
      /*console.log("----------------------------------------------------------");
      console.log(this.direct);
      console.log("str " + str);
      console.log("key " + key);
      console.log(crypt_str);*/
    }
    return crypt_str;
  };
  

  encrypt(str, key) {
    return this.encrypt_decrypt(str, key, true);
  };


  decrypt(str, key) {
    return this.encrypt_decrypt(str, key, false);  
  }

}

module.exports = VigenereCipheringMachine;
