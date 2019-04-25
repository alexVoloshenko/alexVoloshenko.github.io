function isPalindrome (subString) {
  const len = subString.length - 1;
  for (let i = 0; i < len / 2; i++) {
    if (subString[i] !== subString[len - i]) {
      return false
    }
  }
  return true;
}

function palindromeExtraction(str) {
  let palindroms = [];
  let substring;
  for (let i = 0; i < str.length; i++) {
    substring = str.charAt(i);
    for (let j = i + 1; j < str.length; j++) {
      substring += str.charAt(j);
      if (isPalindrome(substring)) {
        palindroms.push(substring);
      }
    }
  }
  return palindroms.sort((a, b) => b.length - a.length);
}

export {isPalindrome, palindromeExtraction};