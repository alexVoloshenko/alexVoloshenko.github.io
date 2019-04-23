const functions = {
  isPalindrome: function (sub) {
    const len = sub.length - 1;
    for (let i = 0; i < len / 2; i++) {
      if (sub[i] !== sub[len - i]) {
        return false
      }
    }
    return true;
  },

  palindromeExtraction: function (str) {
    let palindroms = [];
    let substring;
    for (let i = 0; i < str.length; i++) {
      substring = str.charAt(i);
      for (let j = i + 1; j < str.length; j++) {
        substring += str.charAt(j);
        if (this.isPalindrome(substring)) {
          palindroms.push(substring);
        }
      }
    }
    return palindroms.sort((a, b) => b.length - a.length);
  }
};

export default functions;