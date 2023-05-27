const inquirer = require("inquirer");
const fs = require("fs");
const { Logo, Circle, Square, Triangle } = require("./lib/shapes.js");
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
    const generatedLogo = new Logo(response.shape, response.shapeColor, response.text, response.textColor);
    let Shape = "";
    if (generatedLogo.shape === "circle") {
            Shape = Circle
        }
    else if (generatedLogo.shape === "square") {
            Shape = Square
        }
    else if (generatedLogo.shape === "triangle") {
            Shape = Triangle
    };
    let logoSVG =
        `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            <g>
                <${Shape} fill="${generatedLogo.shapeColor}"/>
                <text font="Georgia" fill="${generatedLogo.textColor}">
                ${generatedLogo.text}
                </text>
            </g>
        </svg>`;
    fs.writeFile("logo.svg", logoSVG, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
    );
});