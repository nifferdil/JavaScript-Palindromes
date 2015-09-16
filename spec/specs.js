describe('isPalindrome', function() {
  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindrome("racecar")).to.equal(true);
  });

  it("will detect if a word is the same backward or forward", function() {
    expect(isPalindrome("hello")).to.equal(false);
  });
});
