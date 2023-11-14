import SHA1 from "crypto-js/sha1";

export const encryptePWD = (pwd) => {
  var encryptedPWD = SHA1(pwd).toString();
  var shuffledString = "";

  for (let i = 0; i < encryptedPWD.length; i = i + 8) {
    var subString = encryptedPWD.slice(i, i + 8);

    shuffledString += subString.charAt(6) + subString.charAt(7);
    shuffledString += subString.charAt(4) + subString.charAt(5);
    shuffledString += subString.charAt(2) + subString.charAt(3);
    shuffledString += subString.charAt(0) + subString.charAt(1);
  }

  return shuffledString.toUpperCase();
};
