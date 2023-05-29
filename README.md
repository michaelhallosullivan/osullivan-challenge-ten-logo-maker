# osullivan-challenge-ten-logo-maker

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Description

Students are tasked with creating a command-line application using Node.js that will generate a logo based on user input. Users will be prompted with questions regarding the desired logo using the Node package Inquirer. After responding to the questions an SVG file will be created with the desired logo. Users will be able to choose from 3 logo shapes (circle, square, or triangle), choose a color for the desired shape, choose 3 characters of desired text, and choose the color for the desired text. Using the Node package Jest, a suite of tests will be run to ensure proper functionality of the application.

## Installation

Run npm install and the necessary modules will be installed from package.json.

## Usage

This logo creator can be used to create custom logos and store them as an SVG file.

Video Walkthrough - (https://drive.google.com/file/d/1bmvjgcyPEuxmURZgXUQV8rbdSfKNVfIV/view)

## Credits

Used Node.js and node packages Inquirer (https://www.npmjs.com/package/inquirer), Jest (https://jestjs.io/), Validate-Color (https://www.npmjs.com/package/validate-color?activeTab=readme), and Inquirer-maxlength-input-prompt (https://www.npmjs.com/package/inquirer-maxlength-input-prompt). All code written by Michael O'Sullivan.

## License

MIT License

![Model](https://github.com/michaelhallosullivan/osullivan-challenge-ten-logo-maker/blob/main/examples/svg-example.svg)
