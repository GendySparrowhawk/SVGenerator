const inquirer = require("inquirer");
const svg = require('@svgdotjs/svg.js');
const shapes = require('./lib/shapes');

const questions = [
    {
        name: 'text',
        message: 'What would you like the text of your logo to say(max 3 letters?'
    },
    {
        name: 'textColor',
        mesasge: 'What color would you like htis text to be? (hex# or color name)'
    },
    {
        name: 'shape',
        type: 'list',
        choices: ['Triangle', 'Circle', 'Square'],
        message: 'please select a shape.'
    },
    {
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    }
]






function init() {
    inquirer.createPromptModule(questions).then((answers) => {
        generateSVG(answers)
    });
}

class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    setTextElement() {
        this.textElement = `${answers.text}`;
        this.textColor = `${answers.textColor}`
    }
    setShapeElement() {
        this.shapeElement = `${answers.shape}`
        this.shapeColor = `${answers.shapeColor}`
    }
    generateSVG() {
        
    }
}
init();