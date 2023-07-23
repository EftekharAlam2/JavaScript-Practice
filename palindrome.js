function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

const inputString = "madam";
console.log("Input String:", inputString);
console.log("Is it a palindrome?", isPalindrome(inputString));
