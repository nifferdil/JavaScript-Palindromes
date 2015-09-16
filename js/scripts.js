var isPalindrome = function(stringInput) {
  if (stringInput.split("").reverse().join("") === stringInput) {
    return true;
  } else {
    return false;
  }
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

$(document).ready(function() {
  $("form#getString").submit(function(event) {
    input = $("input#stringInput").val();

    var palindrome = isPalindrome(input);

    $(".output").text(palindrome);

    $("#result").show();
    event.preventDefault();
  });
});
