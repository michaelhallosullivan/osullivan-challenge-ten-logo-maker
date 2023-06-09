class Circle {
    value = `circle cx="150px" cy="100px" r="35%"`;
};

class Square {
    value = `rect x="50" y="0" width="200px" height="200px"`;
};

class Triangle {
    value = `polygon points="34.5,200 150,0 265.5,200"`;
};

class Logo {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    };
};

module.exports = {
    Logo,
    Circle,
    Square,
    Triangle,
};