/*
CONSTRUCTOR - Design Pattern - Creational

The Constructor pattern in Javascript is a creational pattern that 
use the 'new' keyword combined constructor methods of 
'constructor functions' or ES6 Classes to create new objects. 

Since methods of constructor-created objects can share methods and
properties via their prototype, thus saving memory.

*/

// constructor function
function ShapeFunc (color, sides, description){ 
  this.color = color; 
  this.sides = sides;
  this.description = description;
  this.describe = () => console.log(description);
}

// ES6 class with constructor
class ShapeClass {
  constructor(color, sides, description) {
    this.color = color;
    this.sides = sides;
    this.description = description;
  }
  describe () {console.log(this.description)};
}

const triangleFromFunc = new ShapeFunc('red', 3, 'Created by function');
triangleFromFunc.describe();

const triangleFromClass = new ShapeClass('blue', 3, 'Created by Class');
triangleFromClass.describe();
