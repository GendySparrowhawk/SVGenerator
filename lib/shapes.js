// parent shape class that passes the shape color to the various shapes
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

}
// individual shape classes with the super() and "extends" to use the shape calss's color
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeSVG = `<polygon points="50,0 100,100 0,100" fill="${this.shapeColor}"/>`
    }
    // generates the SVG 
    generateSVG() {
        return this.shapeSVG;
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeSVG = `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`

    }
    generateSVG() {
        return this.shapeSVG
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeSVG = `<rect width="200" height="200" fill="${this.shapeColor}"/>`
    }
    generateSVG() {
        return this.shapeSVG;
    }
}

// the main meaty class wehre all the users inputs are passed and creates a new class of shape based on their selection
class LogoGenerator {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        // switch case to determine the shape class which then returns the svg string for the shape and is passed into the generate fucntion below
        switch (shape) {
            case 'Triangle':
                this.shape = new Triangle(shapeColor);
                break;
            case 'Circle':
                this.shape = new Circle(shapeColor)
                break;
            case 'Square':
                this.shape = new Square(shapeColor)
                break;
            default:
                throw new Error("invaild shape type");
        }
    }

    // a meathod of LogoGenerator that combines all the user data and the shape calss from above to make the shape
    generateSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.generateSVG()}
    <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>`;
    }
}


// exports the classes for use elsewhere in the repo
module.exports = { LogoGenerator, Triangle, Circle, Square };

