// LEC NO.: 220 28 APR 2024
//Constructor Functions


// console.log('Hey We are learning , Construtor Function here');



//Constructor functions are used to create objects in js.
// if we want to create multiple objects having same properties and methods we use constructor functions

// // Constructor Function can be created only in normal function not in arrow functions
// // why ?? because normal function have it own context (this) and arrow function doesn't have their own this they inherit from their enclosing scope
// // best practise to create constructor function always start with capital letter
//At the time of function call they should call using new keyword
// Constructor Function always return the this 
// if we return the object then constructor function return object
// If we try to return any value apart from the Object(function , array  , object) this  will return the this only


// const number =  new Number() // Number is constructor function 


// var employee = {
//     salary: 3000000,
//     taxRegime: 'New',
//     name: 'XYZ',
//     adress: 'XYZ PRS',
//     donation:  500000,
//     investmnent: 50000,
//     hra: 300000
// }

// // const emp1 = {...employee};


// function Employee () {
//     // here this is empty object we are setting the key value pair here  ,
//     // constructor function return this by default
// this = {} //  by default
//   this.firstName = 'Vishal',
//   this.lastName= 'Sharma';
//   this.salary = 200000;
//   this.adress = 'Azad Nagar kanpur'
// }
// const empl  = new Employee();
// const empl1  = new Employee();
// const empl2  = new Employee();
// const empl3  = new Employee();

// empl3.adress ='Delhi Gurgaon'
// console.log(empl , empl1 ,empl2 , empl3);



// // Constructor  function are exactly same as the normal functions  but 
// // they some rules 

// // They should start with the capital letter
// // At the time of function call they should call using new keyword


// // Whenever you call the constrcutor function  , first empty object will be initialzed to the this 

// function Person (name , lastName , adress , gender) {
//     //  this = {} Done by js
//     this.firstName = name;
//     this.lastName = lastName
//     this.adress =  adress;
//     this.gender = gender;
//     // Return will be by default this ?? 
// }





// const per = Person('1' ,'2','3','4');
// const per1 = Person('11' ,'2','3','4')


// Return  of constructor function 

// Constructor Function always return the this 
// if we return the object then constructor function return object
// If we try to return any value apart from the Object(function , array  , object) this  will return the this only


function Student () {
    // return  'Hey'
    // this = {}
    console.log('this' , this) // Student {name: 'Raj'}
     this.name = 'Raj'
    return this;
}


// console.log(Student())

const st = new Student();
console.log(st) //  {}

function BIO () {
    console.log(new.target) // fUNCTION ITSELF
  if(new.target) {
    // constructor function call
  } else {
    // normal function call
  }
}


// const b = new BIO();
const a = BIO()


// JSON.stringify()


const bb = {
    a:{
        b:{
            c:{
                d:{
                    e:{
                        f:{
                           value: 2
                        }
                    }
                }
            }
        }
    }
}

const bb2 = {
    a:{
        b:{
            c:{
                d:{
                    e:{
                        f:{
                          value:   2
                        }
                    }
                }
            }
        }
    }
}

// converting the object into string we use JSON.stringify()
console.log(JSON.stringify({}))
console.log(JSON.stringify(bb))

console.log(JSON.stringify(bb) == JSON.stringify(bb2))


// /* 
// function Person (type) {
//     console.log(this , type)
// }

// Person('Normal call')

// const per = new Person('Constructor')

//  */

// /* const Person1  = (type) =>  {
//     console.log(this , type)
// }

// Person1('Arrow=> Normal call')

// const per1 = new Person1(' Arrow normal Constructor') *//pract.js:5 Uncaught TypeError: Person1 is not a constructor at



// /* function Employee () {
    
// }

// const data = new Employee() // data. = > Employee {} 

// const data1 =  Employee() // data1 => undefined
//  */


// /* 

// function Employee () {
//     this.name = '123'; 
// }

// const data = new Employee() // data. = > Employee {name: '123'} 

// const data1 =  Employee() // data1 => undefined
//  */

// // Array , function. ,Object
// // Primitive data

// function Employee () {
//     this.name = '123'; 
// return 'Hello'
// }

// const data = new Employee() // data. = > Employee {name: '123'} 

// const data1 =  Employee() // data1 => Hello



// function Employee () {
//     this.name = '123'; 
// return 123
// }

// const data = new Employee() // data. = > Employee {name: '123'} 

// const data1 =  Employee() // data1 => 123


// function Employee () {
//     this.name = '123'; 
// return {}
// }

// const data = new Employee() // data. = >{}

// const data1 =  Employee() //  {}


// function Employee () {
//     this.name = '123'; 
// return []
// }

// const data = new Employee() // data. = >[]

// const data1 =  Employee() //[]


// function Employee () {
//     this.name = '123'; 
// return ()=>{
// console.log('hey')
// }
// }

// const data = new Employee() // data. = >[]

// const data1 =  Employee() //[]




// function Example () {
//     console.log('Hey=>' , new.target)
// }


// const data = new Example();
// const data1 =  Example();





function calculateSum() {
    console.log(result); //
    var num1 = 5;
    let num2 = 10;
    const num3 = 15;
    var result = num1 + num2 + num3;
    }
    
    calculateSum();