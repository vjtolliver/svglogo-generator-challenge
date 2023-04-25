const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const fs = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const logoForm = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Please enter three characters to be shown on your logo:',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'tcolor',
        message: 'Please enter a simple color name or hexadecimal number for your TEXT:',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ["Triangle", "Circle", "Square"],
        message: 'Please select a shape for your logo:',
    },
    {
        type: 'input',
        name: 'scolor',
        message: 'Please enter a simple color name or hexadecimal number for your SHAPE:',
    }
]

inquirer.prompt (logoForm)
.then((response) => {
    fs.writeFile('logo.svg', function(error) {
        error ? console.log("error") : console.log("success!");
    });
    });