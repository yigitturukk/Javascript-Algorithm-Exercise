var sideA = 5;
var sideB = 6;
var sideC = 7;


var perimeterOfTriangle = sideA + sideB + sideC;
var perimeterOfTriangleHalf = perimeterOfTriangle / 2;

var areaOfTriangle = Math.sqrt(perimeterOfTriangleHalf *((perimeterOfTriangleHalf - sideA) * (perimeterOfTriangleHalf - sideB) * (perimeterOfTriangleHalf - sideC)));

console.log("This triangle are is :" + areaOfTriangle);