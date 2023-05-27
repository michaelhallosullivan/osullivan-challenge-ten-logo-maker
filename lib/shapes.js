/*`Triangle`, `Circle`, and `Square` classes

SVG image must be 300px x 200px according to Readme

Basic circle with radius of 50. <circle r="50" fill="color"/>

Basic rectangle with equal width and height to create a square <rect width="100" height="100" fill="color"/>

Polygon example 
    format (x,y), (x,y), (x,y) connects final point to start point. Should create equilateral triangle.
    <polygon points="0,0 50,50 100,0" fill="color"/>

Use <g> to group elements

<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <g>
        <circle cx="50" cy="50" r="50" fill="color"/>
        <text font="Georgia" fill="color">
        This is text
        </text>
    </g>
</svg>
*/

//potential constructor

class Logo {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    };

    generateSVG() {
        const Shape = ""
        const Circle = `circle cx="50" cy="50" r="50"`;
        const Square = `rect width="100" height="100"`;
        const Triangle = `polygon points="0,0 50,50 100,0"`;
        function checkShape() {
            if (this.shape === "circle") {
                Shape = Circle
            }
            else if (this.shape === "square") {
                Shape = Square
            }
            else if (this.shape === "triangle") {
                Shape = Triangle
            };
        }
        checkShape();
        const logoSVG =  
        `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            <g>
                <${Shape} fill="${this.color}"/>
                <text font="Georgia" fill="${this.textColor}">
                ${this.text}
                </text>
            </g>
        </svg>`
    };
};

module.exports = Logo;

/*
1) Inquirer asks client for questions
2) Responses are recorded
3) Reponses determine what variables are placed in the output code
4) Output code is saved to a file
*/