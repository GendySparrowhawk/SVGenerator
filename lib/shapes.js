
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    
}

class LogoGenerator {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    generateSVG(SvgShape) {
        let shapeSVG = '';
        switch (SvgShape) {
            case 'Triangle':
                shapeSVG = `<polygon points="50,0 100,100 0,100" fill="${this.shapeColor}"/>`;
                break;
            case 'Circle':
                shapeSVG = `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`;
                break;
            case 'Square':
                shapeSVG = `<rect width="100" height="100" fill="${this.shapeColor}"/>`;
                break;
            default:
                shapeSVG = '';
        }

        return `<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

module.exports = LogoGenerator;