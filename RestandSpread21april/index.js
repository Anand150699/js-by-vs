console.log('What is rest operator and what is spread operator')


// rest and spread operator is  defined by three dots (...)


// this is the rest operator  (rest parameterts)

function multiply (...params) {
        console.log(params) // this will give you the array of param
       let multiply = 1;
       for (let value of params) {
        multiply= multiply*value
       }

    //    console.log(multiply)
}

multiply(1,2,3,4,5,6,7,8,9);

multiply(1 , 10);


multiply(1 , 10 , 10, 10);


function exampleRest(a,b , ...d) {
        console.log(a ,b,d)
}
exampleRest(1,2 , 4,5,6,7,8,9)



// spread opeartor is just opposite to the rest

const array  = [1,2,3,4,5];

console.log(...array) // spread




function callme(a,b ,c) {
console.log(a,b)
}


const data  = ['name' , 'lastName' , 'raj']

callme(...data) // this will just do opposite to the rest operator
callme('name' , 'lastName', 'raj') ;





function sum (...numbers) {
        console.log(numbers)
        console.log(...numbers) // 1 2 3 4 5 6 7 8
}



sum(1,2,3,4,5,6,7,8);





// Rest parameter

// Make this functions such a that it should accept the any number of arguments and sum the value of given all parameter
function sum(a,b,c,d ) {
    let result  = 0;
    if(d) {
        result  =  a+b+c+d; 
    } else if(c) {
        result  =  a+b+c; 
    } else if(b) {
        result  =  a+b
    } else {
        result = a
    }

      return result;
}


const res1 = sum(1,2,3,4) ;   // a=1 , b=2 , c=3 , d=4
console.log('res1=>' , res1 )  // 10


const res2 = sum(1,2,3) ;  // a=1 , b=2 , c=3 , d=undefined
console.log('res1=>' , res2 )  // 6



const res3 = sum(1,2) ;  // a=1 , b=2 , c=undefined , d=undefined
console.log('res1=>' , res3 )  // 


const res4 = sum(1) ;  // a=1 , b=undefined , c=undefined , d=undefined
console.log('res1=>' , res3 )  //  


const res5 = sum(1,2,3,4,5) ;  // a=1 , b=undefined , c=undefined , d=undefined
console.log('res1=>' , res3 )  //  




function advancedSum (...params) {
    let result  = 0;
   for(let i=0;i<params.length;i++) {
    result = result+ params[i]
   }
   console.log(result)
}


advancedSum()
advancedSum(1)
advancedSum(1,2,3,4,5,6)
advancedSum(1,1,1,1,1,1,1,1,1,1,1,1)
advancedSum(1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6)


function advancedSum2 (a,b,...params) {
    let result  = a+b;
    console.log('params' , params)
    //in params we will get the all arguments except first two arguments , a will get the value of 1st arguments b will get the val;ue of 2nd argumewnt
   for(let i=0;i<params.length;i++) {
    result = result+ params[i]
   }
   console.log(result)
}

advancedSum2(3,4)
advancedSum2(1,3,4)
advancedSum2(1,2,3,4,5,6)


// Note: Rest parameter should be the last params  , it should not be in mid
// A rest parameter must be last in a parameter list.



// function  getData (a,b,...c , d) {
//         console.log(a,b,c , d) //  d = [4,5]
// here code will throw the error bechause we cannot use rest operator in mid
// }
// getData(1,2,3 ,4,5)


// spread operator is just opposite to the rest operator,


const data1 = [1,2,3,4,5];

console.log("spread" , ...data1)

console.log("without  spread" , data1)


function exampleSpread(a,b,c) {
    console.log('exampleSpread',a,b,c)
}


exampleSpread(...data1); //  exampleSpread(1,2,3,4,5);



//LEC NO,: 213 22 APR 2024



// Spread Operator Example   

// Finding the maximum value in given array

const data123 = [2,3,4,12,3,4,5,34,34,12,56,76,45,34];


const data1234 = [12,3,4,5,34 , 12,3]


const result  = Math.max(1,2,3,4,4,5);


const result2 =  Math.max(...data123);  // spreading the element (spread operator);


const result3 =Math.max(...data1234 , ...data123);


// Given a two array merge into single array

const mergeArray  = [...data123 , ...data1234] // [2,3,4,12,3,4,5,34,34,12,56,76,45,34 , 12,3,4,5,34 , 12,3]

// Reference Array



// const ns = [];
// let bs =  ns;
// bs.push(1,2,3);

// console.log('bs, ns' , bs , ns)


// const ns1 = [];
// let bs1 =   ns1; // here bs1 have a reference of ns1 
// bs1 = [1,2,3,4] //  here we have reassigned the reference of bs1
// console.log('bs, ns' , bs1 , ns1)




// var bb = [1,2,3] // bb  reference
 
// bb = 2;  // => 


// I want to copy the one array to another but that should not point to the same ref ;



// const s = [1,2,34,54];

// const d1 =  s; // reference copy
// d1.push(100)
// const d =   [...s]//  [1,2,34,54]; deep copy // here d is pointing to new reference

// d.push(200);

// console.log(s)



// Spreading the string
const ss = 'ChillSbHojayega'

console.log(...ss)



// Todo , spreading the object


 // spreading the array



 const [p,q,r,s,t] = [1,2,3,4,5];

 console.log(p,q,r,s,t)






