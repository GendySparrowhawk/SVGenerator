const inquirer = require('inquirer');
// import { input } from '@inquirer/prompts';
// const svg = require('@svgdotjs/svg.js');
const LogoGenerator = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        name: 'text',
        message: 'What would you like the text of your logo to say(max 3 letters?',
        validate: function (input) {
            if (input.length <= 3) {
                return true
            }
            else {
                return 'Please enter up to 3 letters and no more.';
            }
        }
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
    inquirer.prompt(questions).then((answers) => {
        // console.log(answers)
        const logoGeneratorInstance = new LogoGenerator(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        const newShape = logoGeneratorInstance.generateSVG(answers.shape);
        // console.log(newShape);
        fs.writeFile("logo.svg", newShape, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("file created sucessfully");
            }
        });
    });
}


init();