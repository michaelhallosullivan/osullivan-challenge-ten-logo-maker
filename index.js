const inquirer = require("inquirer");
const fs = require("fs");

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
        type: "input",
        message: "What text would you like on your logo?",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like your text to be?",
        name: "text-color",
    },
  ])
  .then((response) => {
    const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });