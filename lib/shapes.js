//SVG image must be 300px x 200px according to Readme
//Basic circle with radius of 50. <circle r="50" fill="color"/>
//Basic rectangle with equal width and height to create a square <rect width="100" height="100" fill="color"/>
/*Polygon example 
format (x,y), (x,y), (x,y) connects final point to start point. Should create equilateral triangle.
<polygon points="0,0 50,50 100,0" fill="color"/>
*/
//use g to group elements

<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <g>
        <circle cx="50" cy="50" r="50" fill="color"/>
        <text font="Georgia" fill="color">
        This is text
        </text>
    </g>
</svg>
