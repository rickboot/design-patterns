/*

FACTORY - Design Pattern - Creational

The factory method pattern is a creational pattern that 
uses factory methods to deal with the problem of creating 
objects without having to specify the exact class of the 
object that will be created.

*/

function ToyFactory() {
  this.toy = ToyDuck;

  this.createToy = function(toySpec) {
    switch (toySpec.toyType) {
      case 'car':
        this.toy = ToyCar;
        break;
      case 'duck':
        this.toy = ToyDuck;
        break;
      default:
        console.log('Toy not specified');
        return null;
    }

    return new this.toy(toySpec);
  }
}

function ToyCar(toySpec) {
  this.toyType = toySpec.toyType
  this.color = toySpec.color
  this.name = toySpec.name
  this.price = toySpec.price
}

function ToyDuck(toySpec) {
  this.toyType = toySpec.toyType
  this.color = toySpec.color
  this.name = toySpec.name
  this.price = toySpec.price
}

// Test ========================

const toyFactory = new ToyFactory();

const car = toyFactory.createToy({
    toyType: "car",
    color: "blue",
    price: 12,
    name: "honda"
})

console.log('\n')
console.log('car =', car)
console.log('car instanceof ToyCar: ', car instanceof ToyCar)

const duck = toyFactory.createToy({
    toyType: "duck",
    color: "yellow",
    price: 5,
})

console.log('\n')
console.log('duck =', duck)
console.log('duck instanceof ToyDuck: ', car instanceof ToyDuck)
console.log('\n')