const { Triangle } = require("./shapes");


describe('Person tests', () => {
    it('should create a tirangle', () => {
        const shape = new Triangle();
        shape.setColor('blue')

        expect(shape.render()).toEqual('<polygon points"150, 18 244, 182 56, 182' 'fill="blue" />')
    });
}); 