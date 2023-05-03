// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        if(this.side1 + this.side2 < this.side3) {
            return false;
        } else if(this.side2 + this.side3 < this.side1) {
            return false;
        } else if(this.side1 + this.side3 < this.side2) {
            return false;
        }
        return true;
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(triangles) {
        let valids = [];
        triangles.forEach(triangle => {
            if(triangle.hasValidSideLengths()) {
                valids.push(triangle);
            }
        })
        return valids;
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1,side2,side3)
        this.isValidTriangle = super.hasValidSideLengths();
    }

    isScalene() {
        return (this.side1 != this.side2 && this.side1 != this.side3 && this.side2 != this.side3)
    }

    validate() {
        this.isValidScalene = this.isScalene();
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1,side2,side3)
        this.isValidTriangle = super.hasValidSideLengths();
    }

    isIsosceles() {
        return (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3);
    }

    validate() {
        this.isValidIsosceles = this.isIsosceles();
    }
}

module.exports = {
    Triangle,
    Scalene,
    Isosceles
};
