/*
SINGLETON - Design Pattern - Creational

The singleton is a creational design pattern that:
- restricts its instantiation to a single instance
- provides easy access to that instance

Uses - database drivers...
*/

// Class Singleton with global instance and counter
// let instance = null;
// let counter = 0;

class Counter {
  constructor() {
    if (Counter.instance == null) {
      this.counter = 0;
      Counter.instance = this;
    }
    return Counter.instance;    
  }

  static getInstance () {
    return Counter.instance;
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}

const myCounter = new Counter();

// ----------------------------

// IIFE Closure Singleton with internal counter - no instance state var needed
const Counter2 = (function() {
  let counter = 0;

  return {
    increment: function() {
      counter++;
    },
    decrement: function() {
      counter--;
    },
    getCount: function() {
      return counter;
    },
  }
})();
