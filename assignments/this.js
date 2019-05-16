/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, is like the forest of trees, not sure which one we are pointing at, so we point at the forest. The this keyword always tries to point to the Window in any place. It works with functions.
*
* 2. Implicit Binding,The object that is standing before the dot is what this keyword will be bound to. You use your pointer to point at the exact location where you want to be. This binding is automatic with objects and methods.
*
* 3. New Binding, Create a new object using object literal, add properties and methods and return this. A constructor function is a function that returns an object. It is an Object creator. When we call it, instead of the 'this' we use 'new' keyword. yikesss
*
* 4. Explicit Binding, We explicitly say to a function what object it should use for this — using functions such as call, apply and bind. It is always for functions only. It tells us where we want to go. We have full control of the 'this'keywrod. CALL, APPLY, BIND - - >  :)
*
* write out a code example of each explanation above
*/
// There is no binding in arrow function. Arrow function don't bind witht he 'this' keyword.If you use arrow functions it will direct you to the forest/global :(

// Principle 1

// code example for Window Binding
function hello(name){
    "use strict";  //Don't bind to the global, stay in the scope of this funtion. Preventing us from pointing to the forest. :) 'use strict' prevents use from accidently biniding to the window.
    return `Hello ${this.name}`;
}      
console.log(hello("Web 19"))

// Principle 2

// code example for Implicit Binding
const hobbit ={
    name: "Samwise",
    age: 102,
    food: "taters",
    cook: function(){
        return `${this.name}Samwise loves to cook taters ${this. food}`;
    }
} 

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
const person = {
    "name":"Ruby"
}

function introduction(skill1,skill2,skill3){
    return `Hello, my name is ${this.name} and I like to program in: ${skill1},${skill2},${skill3}`;
}

const skills = ["HTML","CSS","JS"];
//Call accepts individual args
console.log(introduction.call(person,"HTML",...skills));

//Apply needs an array if you want to pass in more args.
//If you know your spread and know how to use it, Apply becomes obsolete.

//Bind is used to save the this keyword for later

const useLAter = introduction.bind(person,...skills);
// console.log(useLater());  =======> for next week . . . REMEMBER