const Circle = `circle cx="50" cy="50" r="50"`;
const Square = `rect width="100" height="100"`;
const Triangle = `polygon points="0,0 50,50 100,0"`;


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