const { Circle, Square, Triangle } = require("./shapes.js");

describe("validateShapes", () => {
  test("Triangle", () => {
    const shape = new Triangle();
    expect(shape.value).toEqual(`polygon points="34.5,200 150,0 265.5,200"`);
  });
  test("Square", () => {
    const shape = new Square();
    expect(shape.value).toEqual(`rect x="50" y="0" width="200px" height="200px"`);
  });
  test("Circle", () => {
    const shape = new Circle();
    expect(shape.value).toEqual(`circle cx="150px" cy="100px" r="35%"`);
  });
});