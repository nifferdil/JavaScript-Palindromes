var isPalindrome = function(stringInput) {
  return stringInput.split("").reverse().join("") === stringInput;
};

var isPalindromeRecursive = function(stringInput) {
  if (stringInput.length === 1) {
    return true;
  } else if (stringInput.length === 2) {
    return stringInput[0] === stringInput[stringInput.length-1];
  } else {
    if (stringInput[0] === stringInput[stringInput.length-1]) {
      return isPalindromeRecursive(stringInput.substring(1, stringInput.length-1));
    } else {
      return false;
    }
  }
}

// $(document).ready(function() {
//
// });
