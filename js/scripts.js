var isPalindrome = function(word) {
  return word.split("").reverse().join("") === word;
};

var isPalindromeRecursive = function(word) {
  if (word.length === 1) {
    return true;
  } else if (word.length === 2) {
    return word[0] === word[word.length-1];
  } else {
    if (word[0] === word[word.length-1]) {
      return isPalindromeRecursive(word.substring(1, word.length-1));
    } else {
      return false;
    }
  }
}

// $(document).ready(function() {
//
// });
