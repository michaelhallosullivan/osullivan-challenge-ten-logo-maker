const { validateHTMLColorHex, validateHTMLColorName } = require("./index.js");

test("It should return true if a valid color keyword is entered, and false if an invalid color keyword is entered", () => {
            color1 = "red";
            color2 = "triangle";
            expect(validateHTMLColorName(color1).toBe(true));
            expect(validateHTMLColorName(color2).toBe(false));
});
test("It should return true if a valid hexadecimal code is entered, and false if an invalid color code is entered", () => {
            color1 = "#FFFFFF";
            color2 = "triangle";
            expect(validateHTMLColorHex(color1) === true);
            expect(validateHTMLColorHex(color2) === false);
});