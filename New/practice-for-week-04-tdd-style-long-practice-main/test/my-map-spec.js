const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require('../problems/my-map');

describe('myMap', function() {
    beforeEach(function() {
        test_arr = [1,2,3];
        callback = num => num*2;
    })
    it('should return a new array where the callback has been called upon each element in the original array', function (){
        let spy = chai.spy(callback)
        myMap(test_arr, spy);
        expect(spy).to.have.been.called.exactly(test_arr.length);
    })

    it('should not mutate the original array', function() {
        myMap(test_arr, callback);
        expect(test_arr).to.deep.equal([1,2,3]);
    })

    it('should not call Array.map', function() {
        let spy = chai.spy.on(Array.prototype, 'map')
        myMap(test_arr, callback);
        expect(spy).to.not.have.been.called();
    })
})
