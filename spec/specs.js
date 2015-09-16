describe('isPalindrome', function() {
  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindrome("racecar")).to.equal(true);
  });

  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindrome("hello")).to.equal(false);
  });
});

describe('isPalindromeRecursive', function() {
  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindromeRecursive("racecar")).to.equal(true);
  });

  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindromeRecursive("raceecar")).to.equal(true);
  });

  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindromeRecursive("hello")).to.equal(false);
  });

  it("consider single letter a palindrome", function() {
    expect(isPalindromeRecursive("a")).to.equal(true);
  });

  it("accommodates two-letter words", function() {
    expect(isPalindromeRecursive("aa")).to.equal(true);
  });

  it("accommodates two-letter words", function() {
    expect(isPalindromeRecursive("ab")).to.equal(false);
  });
});
