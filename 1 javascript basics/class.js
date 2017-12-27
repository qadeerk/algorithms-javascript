//Old syntax

function objectX(){

}

var myObject = new objectX();

function objectY(something){
  this.something = something;
}

var myObject = new objectY("something");

// new object initialises "this" as an empty object and then return this at the end 

// So

function objectZ(something){
  // var this ={};
  this.something = something;
  this.someOtherThing = 1;
  var objectxx=2;
  //return this
}

// is {something:"0",someOtherThing:1}

var myObjectZZ1 = new objectZ("0");
var myObjectZZ2 = new objectZ("1");

objectZ.prototype.sharedSomething = 5; // shared object between all objects of "new objectZ"


// plus every "object"(var prototype) in javascript has a default object prototype
// this is like the static object in java or c# it is the same for all children.
// protopype can also = to a function
// and it will have access to all the elements in that object 

objectZ.prototype.sharedfunction = function() {
console.log("something = "+this.something);
}; 


// so in context of data structures


// code below needs updating 
function List(){
  this.next;
  this.previous;
  this.value;
}
List.prototype.root;
List.prototype.currentPointer;
List.prototype.initialize = function(value){}
List.prototype.addObject = function(value){}
