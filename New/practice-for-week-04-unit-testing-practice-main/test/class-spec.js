const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let test_word;

  beforeEach(() => {
    test_word = new Word ('crane');
  })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(test_word.word).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(test_word.word).to.equal('crane');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(test_word.removeVowels()).to.equal('crn');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(test_word.removeConsonants()).to.equal('ae');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(test_word.pigLatin()).to.equal('anecray');
    });
  });
});
