const { validateHTMLColorName, validateHTMLColorHex } = require("validate-color");

describe("validateHTMLColorName", () => {
        test("It should return true if a valid color keyword is entered, and false if an invalid color keyword is entered", () => {
            color1 = "red";
            color2 = "triangle";
            console.log(validateHTMLColorName(color1));
            expect(validateHTMLColorName(color1).toBeTruthy());
            expect(validateHTMLColorName(color2).toBeFalsy());
          });
    });
describe("validateHTMLColorHex", () => {
        test("It should return true if a valid hexadecimal code is entered, and false if an invalid color code is entered", () => {
            color1 = "#FFFFFF";
            color2 = "triangle";
            expect(validateHTMLColorHex(color1).toBeTruthy());
            expect(validateHTMLColorHex(color2).toBeFalsy());
          });
  
});

/*
Validate color keyword or hexadecimal number

Test for proper shape notation

The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/