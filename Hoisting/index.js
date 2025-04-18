//LEC. NO. : 184 20 MAR 2024

// console.log('Relax......😀')

// Scope
// Hoisting
// TDZ(temporal dead zone)
// block scope
// functional scope
// window  (done)
// this 
// context
// execution context
// lexical scoping
// lexical environment
// code execution 
// CallStack
// Gloabal Execution Context
// Functional Execution Context


// window is object which is represent of global memory 

// Global Execution Context => Whenever your javascript code is started executing by browser or nodesjs server
// than GEC will be created , this is the top level of execution wherer all JS code execute 
// All the variable define in context will be part of Global object which is equivalent to the window object i.e. window.variable
// In global execution context this will be pointed to the window  , meand this will be bind with window 
// the value of this will be window
// GEC is combination of memory and thread of execution (code running) //


//LEC. No. : 185 21 MAR 2024


// Example 1
// var a = 30;

// console.log(a);
// // console.log(window.a);

// var n1 = 50*a;

// console.log(n1)


// console.log(window)
// console.log(this)

// console.log(this==window) // true
// console.log(this===window) // true

// // what happens if i try to change the this in gec

// // this = {} // this will throw the error //
// // In Gec you cannot assign or update the value of this
// console.log('this=>', this)



// Example 2

// console.log(a1) //  undefined

// var a1 = 30;

// console.log(a1) //  30


///LEC. NO 185
///21 MAR 2025



// Example 3
//console.log(c1); // we are accessing c1 before declaraion 

// console.log(b1) // 

// console.log(d1)

// let b1 = 60;
 
// var c1 = 40;

// const d1 = 90;

// console.log(b1)

// console.log(d1)

// let and const will get the different scope that is script scope  , the variable which is not in global
// scope Js cannot allow to access before initialization
// Means let and const are not the part of global memory so they will not accessibke before the initialization


// What is hoisting ?
// hoisting is the memory assignment phase due to that 
// variablecan be accessed at top of it declaration

// Does let and const are hoisted ?

// Let const and var are hoisted  , but let and const are in different scope 
// we cannot access before initialization because they are TDZ Zone
// The let and const are in TDZ Zone (Temporal Dead Zone)


// Temporal Dead Zone  => The zone where the variable is located and we cannot access that variable before
// initialization

// The area of block where a variable is inaccsessible until the value is 
// not initialized to it.






// Example 3


// console.log(c1); // we are accessing c1 before declaraion 

// // console.log(b1) // 

// // console.log(d1)

// let b1 = 60;
 
// var c1 = 40;

// const d1 = 90;

// console.log(b1)

// console.log(d1)

// function declaration vs function expression


// Example
// function declaration
// we can access the func before declaration if it is type of  function declaration

// func();

// function func () {
//     console.log('Hi')
// }

console.log(call) // undefined
// call()//  it will throw the error undefined is not a function
// here call is like var keyword
var call = function () {
   console.log('call')
}

console.log(call1) // this will throw the error , Because it is tdz zone
const call1 = ()=> {

}
// The function which type of expression , will behave like a let const or var /
// it depends which keyword you  have use for  function assignment