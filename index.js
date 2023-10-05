// importing inquirer, my shapes.js and fs
const inquirer = require('inquirer');
const { LogoGenerator } = require('./lib/shapes');
const fs = require('fs');

// questions for the user
const questions = [
    {
        name: 'text',
        message: 'What would you like the text of your logo to say?(max 3 letters)',
        // a validate function to stop the log tex at 3 letters
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
        message: 'What color would you like the shape to be?(hex# or color name)'
    }
]
// the init function which first prompts the user then takes their answers and runs it through the logognerator class from shapes.js
function init() {
    inquirer.prompt(questions).then((answers) => {
        const logoGeneratorInstance = new LogoGenerator(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        const newShape = logoGeneratorInstance.generateSVG(answers.shape);
        // the write file funciton that  actually produces the final product
        fs.writeFile("logo.svg", newShape, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("You got yourself a shiny new logo!");
            }
        });
    });
}

// call the init function when index.js is called in the terminal
init();
