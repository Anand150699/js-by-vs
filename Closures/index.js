// LEC NO.: 214 23 APR 2024


const userName= 'Vishal Sharma';

const orgName= 'Newton School'

function Outer() {
    const data = 30;
    const data2 = 40;
    function inner() {
        const innerData = 30;
        const  innerData2 =  40;
       console.log(data , data2) 
//  30  , 40
      console.log(innerData , innerData2 ); 
//  30 40 

    }
    inner();
}


Outer(); // FEC REMOVE


// lexical environment (scope) = >  // it the place where  variable and function declaration 
                            // of particular execution context or scope is stored , 
                            // it have reference of its parent lexical environment;

// lexical scope chaining = >   // we can access the variables of all the parents execution context (functions) from the innermost  function
                                // where each lexical scope  have reference to it parent lexical scope;

// Closures => It is the combination of function and its lexical environment is called the closures


function increment() {
    let count = 0;
//     function addOne(){
//         count ++;
//         return count;
//     }
//    return   addOne;

   return function(){
            count ++;
            return count;
        }
}


// const func = increment(); //  FEC ?? 

// const res =  func(); // 1
// const res1 =  func(); // 2
// const res2 =  func();// 3
// const re3 =  func();// 4

// console.log(res , res1 , res2 , re3)

// // all functions form the closures  // means all functions are closures , there is exception


// function callParent() {
//     var name =1200;
//     function call () {
//         var a =30;
//         var d= 40;
//         var c= 60;
//         function inner () {
//       // clousress ?? Yes cz its accessing the variables from parent lexical enviroment
//                 console.log('hey', a , name)
//         } 
//         return inner;
//     }

//     return call;
    
// }



// const parentCall = callParent();
// const callChild  = parentCall();

// const func2 = callParent()();

// func2()
// func2()
// func2()




// 


// function sum(a){
//     return function  (b){
//         return function (c){
//             return function (d){
//                 return a+b+c+d;
//             }
//         }
//     }
// }

// const res = sum(1)(2)(3)(4)//// CURRYING
// console.log(res)
