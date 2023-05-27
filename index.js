const inquirer = require("inquirer");
const fs = require("fs");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
 
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

inquirer
  .prompt([
    {
        type: "list",
        message: "What shape would you like your logo to be?",
        name: "shape",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        message: "What color would you like your shape to be?",
        name: "shape-color",
    },
    {
        type: "maxlength-input",
        message: "What text would you like on your logo?",
        name: "text",
        maxLength: 3,
    },
    {
        type: "input",
        message: "What color would you like your text to be?",
        name: "text-color",
    },
  ])
  .then((response) => {

    //Possible response date - what to do with it?
    response.shape
    response.shape-color
    response.text
    response.text-color

    //Creates generatedSVG based on text input
    const svgName = `${response.text}.json`;
    //Writes file called logo.svg
    fs.writeFile("logo.svg", svgName, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
    );

});