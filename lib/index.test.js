const { validateHTMLColorHex, validateHTMLColorName } = require("../index.js");

describe("validateColor", () => {
test("It should return true if a valid color keyword is entered, and false if an invalid color keyword is entered", () => {
            const color1 = "red";
            const color2 = "triangle";
            const output1 = validateHTMLColorName(color1);
            const output2 = validateHTMLColorName(color2);
            expect(output1).toBeTruthy();
            expect(output2).toBeFalsy();
});
test("It should return true if a valid hexadecimal code is entered, and false if an invalid color code is entered", () => {
            const color1 = "#FFFFFF";
            const color2 = "triangle";
            const output1 = validateHTMLColorHex(color1);
            const output2 = validateHTMLColorHex(color2);
            expect(output1).toBeTruthy();
            expect(output2).toBeFalsy();
});
});