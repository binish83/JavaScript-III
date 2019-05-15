/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding, It’s the most common case of function calls the standalone function invocation.
* 2. Implicit Binding,The object that is standing before the dot is what this keyword will be bound to.
* 3. New Binding, Create a new object using object literal, add properties and methods and return this.
* 4. Explicit Binding, We explicitly say to a function what object it should use for this — using functions such as call, apply and bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myFunction = function() {
    console.log(this.a);
 }
 
 var a = 5 ;
 myFunction();      

// Principle 2

// code example for Implicit Binding
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 


// Principle 3

// code example for New Binding
function Foo() {        
    this.name = 'Santa';
    this.say = function () {
    return "I am " + this.name; 
   };
 }

var name = 'Clause';
var result = new Foo();
console.log(result.name);  


// Principle 4

// code example for Explicit Binding
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet.call(person, arg1, arg2, arg3,); 