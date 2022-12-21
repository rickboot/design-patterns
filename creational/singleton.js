/*
SINGLETON - Design Pattern - Creational

The singleton is a creational design pattern that:
- restricts its instantiation to a single instance
- provides easy access to that instance

Uses - database drivers...
*/

// Class Singleton with global instance and counter
let instance = null;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('There can be only one!');
    }
    instance = this;
  }

  static getInstance () {
    return this;
  }

  increment() {
    counter += 1;
  }

  decrement() {
    counter -= 1;
  }
}

const myCounter = new Counter()

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