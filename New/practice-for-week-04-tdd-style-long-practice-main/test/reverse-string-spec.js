const chai = require("chai");
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe("reverseString", function() {
    it('should return the string reversed', function () {
        expect(reverseString('fun')).to.equal('nuf');
    });

    it('should throw an error if input is not a string', function () {
        expect(() => reverseString(1)).to.throw(Error);
    });
});
