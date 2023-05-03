// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { returnsThree, reciprocal } = require('../problems/number-fun')

describe("returnsThree", function ( ){
    it('should return the number three', function() {
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal', function () {
    it('should return the reciprocal of the given number', function (){
        expect(reciprocal(1)).to.equal(1);
        expect(reciprocal(2)).to.equal(0.5);
        expect(reciprocal(10)).to.equal(0.1);
    })

    it('should only take in numbers between 1 and 1.000.000', function () {
        expect(() => reciprocal(0)).to.throw(TypeError);
        expect(() => reciprocal(1000001)).to.throw(TypeError);
    })
})
