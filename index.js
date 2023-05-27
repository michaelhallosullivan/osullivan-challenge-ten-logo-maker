const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require("./lib/shapes.js");
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
        name: "shapeColor",
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
        name: "textColor",
    },
  ])
  .then((response) => {
    //generates Logo using Logo constructor imported from shapes.js
    const generatedLogo = new Logo(response.shape, response.shapeColor, response.text, response.textColor);
    //runs generateSVG with the new response data
    const logoSVG = generatedLogo.generateSVG();
    //Writes file called logo.svg
    fs.writeFile("logo.svg", logoSVG, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
    );
});