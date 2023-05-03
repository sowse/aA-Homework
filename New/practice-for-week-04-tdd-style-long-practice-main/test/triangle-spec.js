// Your code here
const chai = require("chai");
const expect = chai.expect;

const { Triangle, Scalene, Isosceles } = require('../problems/triangle');

describe('Triangle Class', function () {
    let triangle;
    let non_triangle;

    beforeEach( () => {
        triangle = new Triangle(3,4,5)
        non_triangle = new Triangle(18,3,4);    
    });

    describe('Triangle Constructor', function () {
        it('should take in the lengths of 3 sides and set them as properties on the instance', function () {
            expect(triangle.side1, triangle.side2, triangle.side3).to.equal(3,4,5);
        });
    });

    describe('Triangle.getPerimeter()', function () {
        it('should return the sum of the three sides', function () {
            expect(triangle.getPerimeter()).to.equal(12);
        })
    })

    describe('Triangle.hasValidSideLengths()', function() {
        it('should return true if the triangle is valid', function () {
            expect(triangle.hasValidSideLengths()).to.equal(true);
        });

        it('should return false if the triangle is not valid', function() {
            expect(non_triangle.hasValidSideLengths()).to.equal(false);
        });
    });

    describe('Triangle.validate()', function() {
        it("should add an isValid property to the triangle instance according to if it's valid or not", function () {
            triangle.validate();
            non_triangle.validate();
            expect(triangle.isValid).to.equal(true);
            expect(non_triangle.isValid).to.equal(false);
        })
    });

    describe('Triangle getValidTriangles()', function (){
        it("should take in an arbitrary number of triangle instances and return all instances that are valid triangles", function () {
            expect(Triangle.getValidTriangles([triangle,non_triangle])).to.deep.equal([triangle]);
        })
    })
});

describe('Scalene Class', function () {
    let scalene;
    let non_scalene;

    beforeEach( () => {
        scalene = new Scalene(3,4,5);
        non_scalene = new Scalene(3,3,4);
    })

    describe('Scalene constructor', function () {
        it('should inherit from the Triangle class, be initialized with 3 side lengths and have an isValidTriangle property.' , function (){
            expect(scalene instanceof Triangle).to.be.true;
            expect(scalene.side1, scalene.side2, scalene.side3).to.equal(3,4,5);
            expect(scalene.isValidTriangle).to.be.true;
        })
    })

    describe('Scalene.isScalene()', function () {
        it('should return whether the instance is a valid scalene', function () {
            expect(scalene.isScalene()).to.be.true;
            expect(non_scalene.isScalene()).to.be.false;
        })
    })

    describe('Scalene.validate()', function() {
        it('should add an isValidScalene property to the instance that matches whether it is a scalene triangle and override the relevant Triangle method.', function () {
            scalene.validate();
            non_scalene.validate();
            expect(scalene.isValidScalene).to.be.true;
            expect(non_scalene.isValidScalene).to.be.false;
        })
    })
})

describe('Isosceles Class', function () {

    let isosceles;
    let non_isosceles;

    beforeEach( () => {
        isosceles = new Isosceles(3,3,5);
        non_isosceles = new Isosceles(3,4,5);
    })

    describe('Isosceles constructor', function () {
        it('should inherit from the Triangle class, be initialized with 3 side lengths and have an isValidTriangle property.' , function (){
            expect(isosceles instanceof Triangle).to.be.true;
            expect(isosceles.side1, isosceles.side2, isosceles.side3).to.equal(3,4,5);
            expect(isosceles.isValidTriangle).to.be.true;
        })
    })

    describe('Isosceles.isIsosceles()', function () {
        it('should return whether the instance is a valid Isosceles', function () {
            expect(isosceles.isIsosceles()).to.be.true;
            expect(non_isosceles.isIsosceles()).to.be.false;
        })
    })

    describe('Isosceles.validate()', function() {
        it('should add an isValidIsosceles property to the instance that matches whether it is an isosceles triangle and override the relevant Triangle method.', function () {
            isosceles.validate();
            non_isosceles.validate();
            expect(isosceles.isValidIsosceles).to.be.true;
            expect(non_isosceles.isValidIsosceles).to.be.false;
        })
    })
})
