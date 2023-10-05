const { Triangle, Circle, Square } = require("./shapes");

describe('Triangle Test', () => {
    it('should create a triangle', () => {
        const shape = new Triangle('blue');
        const expectedSVG = `<polygon points="50,0 100,100 0,100" fill="blue"/>`;

        const renderedSVG = shape.generateSVG();
        expect(renderedSVG).toEqual(expectedSVG);
    });
});

describe('Circle Test', () => {
    it('Should create a circle', () => {
        const shape = new Circle('red');
        const expectedSVG = `<circle cx="50" cy="50" r="50" fill="red"/>`;

        const renderedSVG = shape.generateSVG();
        expect(renderedSVG).toEqual(expectedSVG);
    });
});

describe('Square Test', () => {
    it('Should create a square', () => {
        const shape = new Square('green');
        const expectedSVG = `<rect width="200" height="200" fill="green"/>`;

        const renderedSVG = shape.generateSVG();
        expect(renderedSVG).toEqual(expectedSVG);
    });
});
