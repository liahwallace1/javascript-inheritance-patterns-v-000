const app = "I don't do much."

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function(x,y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.position = function() {
  return(this.x + ", " + this.y);
}

//Shows all of the properties of rect all the way up the chain
for (var prop in rect) {
  console.log("rect." + prop + " = " + rect[prop]);
}

//Shows only properties directly available on rect (not Shape)
for (var prop in rect) {
  if(rect.hasOwnProperty(prop)) {
    console.log("rect." + prop + " = " + rect[prop]);
  }
}

function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}

function Rectangle(x, y, width, height) {
  Quadrilateral.call(this, x, y, width, height, width, height);

  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
    return this.width * this.height;
  };

function Square(x, y, length) {
  Rectangle.call(this, x, y, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

var rect = new Rectangle(4, 3, 5);
var square = new Square(4, 2);

rect.area();
square.area();

Rectangle.prototype.internalAngles = 90;
rect.internalAngles;
square.internalAngles;
