const Algo = require("../algo");


describe("Algo", () => {
  describe("reverse", () => {
    it("should be reverse string", () => {
      const str = "orange";
      const reversed = "egnaro";

      const result = new Algo().reverse(str);

      expect(result).toEqual(reversed);
    });
  });

  describe("isPalindrome", () => {
    it("should return true if string is palindrom", () => {
      const str = "racecar";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    });
    it("should return false if string is not a palindrome", () => {
      const str = "beef";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should return all words capitalized", () => {
        const str = "hello world, I love juice!";
        const capitalized = "Hello World, I Love Juice!";
        const result = new Algo().capitalize(str);
        expect(result).toEqual(capitalized);
      
    });
  });
});
