/* 
BUILDER - Design Pattern - Creational

The builder pattern is a creational pattern that builds complex 
objects using simpler objects. It provides a flexible, step-by-step 
approach that hides the details and complexity involved.

*/

// function Meal() {
//   this.make = function(builder){
//     builder.step1();
//     builder.step2();
//     builder.step3();
//     builder.step4();
//     return builder.get();
//   }
// }
 
// function MealBuilder(pattie,side,soda) {
//    this.meal = null;

//    this.step1 = () => this.meal = new Order();
//    this.step2 = () => this.meal.addBurger(pattie);
//    this.step3 = () => this.meal.addSide(side);
//    this.step4 = () => this.meal.addSoda(soda);

//    this.get = () => this.meal;
// }
 
// function Order() {
//     this.burger = null;
//     this.side = null;
//     this.soda = null; 
 
//     this.addBurger = (pattie) => this.burger = pattie;
//     this.addSide = (side) => this.side = side;
//     this.addSoda = (soda) => this.soda = soda;
//     this.display = () => console.log(`You meal has a ${this.burger} burger, ${this.side}, and a ${this.soda}.`);
// }
 
// const meal = new Meal();
// const mealBuilderChicken = new MealBuilder("chicken","curly fries","coke");
// const chickenBurgerMeal = meal.make(mealBuilderChicken);
// chickenBurgerMeal.display();   

// const mealBuilderBuffalo = new MealBuilder("buffalo","fries","chocolate shake");
// const buffaloBurgerMeal = meal.make(mealBuilderBuffalo);
// buffaloBurgerMeal.display();

// from Web Dev Simplified

class User {
  constructor(name, { age, phone, address } = {} ) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

// class User {
//   constructor (name) {
//     this.name = name
//   }
// }

// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name)
//   }

//   setAge(age) {
//     this.user.age = age
//     return this
//   }

//   setPhone(phone) {
//     this.user.phone = phone
//     return this
//   }

//   setAddress(address) {
//     this.user.address = address
//     return this
//   }

//   build() {
//     return this.user
//   }
// }