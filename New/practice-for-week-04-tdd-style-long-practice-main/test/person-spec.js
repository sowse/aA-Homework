// Your code here
const chai = require("chai");
const expect = chai.expect;

const Person = require('../problems/person');

describe("Person class", function () {
    let jake;
    let jaina;
    beforeEach( () => {
        jake = new Person('Jake', 30);
        jaina = new Person('Jaina', 20);
    })

    this.afterEach( () => {
        jake = null;
        jaina = null;
    })
    describe('Person constructor', function () {
        it('should take a name and age parameters and set them as properties of the Person instance.', function () {
            expect(jake.name).to.equal('Jake');
            expect(jake.age).to.equal(30);
        })
    })

    describe('Person.sayHello()', function () {
        it("should return a string of the Person instance's name and a greeting message", function (){
            expect(jake.sayHello()).to.equal('Hello Jake!');
        })
    })

    describe('Person.visit(otherPerson)', function () {
        it("should return a string stating that this instance visited the passed-in person instance.", function (){
            expect(jake.visit(jaina)).to.equal('Jake visited Jaina');
        })
    })

    describe('Person.switchVisit(otherPerson)', function () {
        it('should invoke the visit method of the parameter (otherPerson), passing in the current instance as an argument', function () {
            expect(jake.switchVisit(jaina)).to.equal('Jaina visited Jake');
        });
    });

    describe('Person.update(obj)', function () {
        it('should throw a new TypeError if the incoming argument is not an object.', function () {
            expect(() => jake.update(1)).to.throw(TypeError); 
        })

        it('should throw a TypeError if the incoming object does not have a name and age property.', function (){
            expect(() => jake.update({surname: 'todd', son: 'carl'}).to.throw(TypeError));
        });

        it("should update the instance's properties to match the passed-in object's values", function () {
            jake.update({name: "John", age: "60"});
            expect(jake.name,jake.age).to.equal("John", 60);
        })
    })

    describe('Person.tryUpdate(obj)', function () {
        it('should return true is Person.update was successfully invoked.', function (){
            expect(jake.tryUpdate({name: "John", age: 60})).to.equal(true);
            expect(jake.name, jake.age).to.equal('John', 60);
        })

        it('should return false if Person.update was not successfully invoked', function () {
            expect(jake.tryUpdate(1)).to.equal(false);
        })
    })

    describe('Person.greetAll(obj)', function () {
        it('should call the sayHello() method on each Person instance and return an array of each returned string', function () {
            expect(Person.greetAll([jake, jaina])).to.deep.equal(["Hello Jake!", "Hello Jaina!"])
        });
    });
})
