//5 Mar 2024 LEC. NO. 167


// String in Javascript

// Creating string variable
// 1. string literal
 var orgName = 'Newton';

//  2. Using String constructor

// Todo:5
var orgName1 = new String('Newton School ');

console.log(orgName1)
console.log(typeof orgName1)//object

// concatenation of string (jodna )

var s =  orgName1+orgName;
console.log(s)

var a = 'a'+'b'+'c'+'d';
 console.log(a)//"abcd"

 // length of string (length ) => it will give you the count of character or any special character or number

 console.log(s.length);

// @#$%....
 var  ss = '@34#$.!~234vishal  ';
 console.log(ss.length)

 // sometimes we need to convert number into the string

 var num = 234567;

 var numS = num.toString(); // converting number into the string
 console.log(typeof numS)//string


 var firstName  = 'Vishal' // ['V', 'i' ,'s', 'h','a','l']

 console.log(firstName[0])
 console.log(firstName.charAt(0)) // Java me bhi karte the

 // Reverse a string using javascript

//  function reverseString(s) {
//     // wrire code here
//     var ss ='';
//     for(var i =s.length-1 ;i>=0;i--){
//             ss = ss+ s[i];
//     }
//     console.log('reverse string=> ' , ss)
//  }
//  reverseString('Vishal')

var s1 ='Javascript'; 

console.log(s1.indexOf('J'));
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());
console.log(s1.lastIndexOf('J'));
console.log(s1.indexOf('k'))////========>-1 agar nhi he toh -1


// CONVERTIN THE STRING INTO ARRAY 
// split() uses identifier
console.log(s1.split(''));

var words = 'Vishal  Sharma Hello How are you ?';
console.log(words.split(' '));//['Vishal', '', 'Sharma', 'Hello', 'How', 'are', 'you', '?']
console.log(words.split(''));//['V', 'i', 's', 'h', 'a', 'l', ' ', ' ', 'S', 'h', 'a', 'r', 'm', 'a', ' ', 'H', 'e', 'l', 'l', 'o', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', '?']
console.log(words.split());//['Vishal  Sharma Hello How are you ?']

var sentence = 'Vishal-Sharma-Hello-How-are-you ?';
console.log(sentence.split('-'));
// var sentence = 're-you ?';
console.log(sentence.split('a'));


//6 MAR 2024 LEC. NO. 169

//

 var num3 = 23455678;
var num3S  =  num3.toString(); //  '23455678'
var length =  num3S.length;
console.log(length)

 console.log(num3.toString().length)



 // Conveting Array into string

//  join uses seperator

 var array = [3,4,5,6,7,8];
 console.log(array.join('?')) // '3?4?5?6?7?8'
 console.log(array.join('-')) // '3-4-5-6-7-8'
 console.log(array.join('')) // '345678'
 console.log(array.join('---')) // '3---4---5---6---7---8'
 console.log(array.join())//'3,4,5,6,7,8'
 array.join(' ')//'3 4 5 6 7 8'

// TODO:Prototype

Array.prototype.myJoin  = function  (seperator) {
    var s = ''
    for(var i =0;i<this.length;i++) {
        if(i===this.length-1) {
            s = s+ this[i]
        } else {
            s = s+ this[i]+ seperator
        }
    }
    return s;
}
// console.log(array.myJoin(':'))


function join (seperator , array) {
    var s = ''
    for(var i =0;i<array.length;i++) {
        if(i===array.length-1) {
            s = s+ array[i]
        } else {
            s = s+ array[i]+ seperator
        }
    }
    return s;
}
console.log(join(':' , array))

// 
var sentence = "Hello we are learning String datatype";

// IT will replace first value which is there in string
console.log(sentence.replace('Hello', `E`));


console.log(sentence.replaceAll('e', `E`));

 
console.log(sentence.startsWith('o we are' , 4)) // true
console.log(sentence.endsWith('datatype' ,10)) // false
console.log(sentence.startsWith('ello')) // false
console.log(sentence.endsWith('datatype')) // true

 // replace
 // substring 
 // concat
 // endWith
 // startWith
 // includes


 var set2 ='                                                attaa                  ';
//  trim() this function will remove extraa spaces from the start and end of the string
//

console.log(set2 , 'after trim:',set2.trim('') , set2.trimStart() , set2.trimEnd())


// includes ?? this method will return true if given string is exist inside the main string else it return false


var quote = 'Learn and Grow , Keep doing hard workd until you get the Job';

console.log(quote.includes('Keep'))  // true
console.log(quote.includes('Keep1')) // false
console.log(quote.includes('Learn and Grw')) // false






//7 MAR 2024 LEC NO 170






// Note => If we use plus operator(+) in the combination of number and string  , pluse operator convert number 
//into string  first and after that concantenate it

var data = 2 + 'hello';  // = > '2'+ 'hello'= > '2hello'

console.log(data);



var tt = +("20" + "30" + "40") + +"120" + "230";//+("203040")+ +"120"+"230"==>203160+"230"==>"203160230"

console.log("tt=>", tt); // 





var ttt = +(+"20" + +"30" + "0")+ "20" + "60"; // =5002060

var ttt2 = +'2+2+2'; //  NaN


console.log( 'ttt=>', ttt) //  205002060




// Minus convert numeric string into the  number

var tts = -("20" + "30" + "50") - ("30" - "30" + 60);//-203050-60//202990

console.log("tts=>>", tts); //







//Plus Operator
// left or right if there string then dusre ko bhi string bna deta ha

//  60 + '60' =>  6060


// Minus operator

// left or right if there is any numeric string value it will convert it into number

// '30'-30 => 30-30 => 0
// '30' - '30' =>  30-30 => 0

//"a"+2+3+"4"+"6"+7=> "a23467"

//+("2"+"3")+"A"+ +("2"+"3")+7==>"23A237"

//+(8-7+"2")-("3"+"6")+(8-7)==>-23


// Create a message to the everyuser
//  Hi, {UserName} thank you for being with us from past {1} {Year} , Today is your {first} anniversary

function generateMsg (userName , noYears ) {
    // const  message = ' Hi, '+ userName + ' thank you for being with us from past '+ noYears + ' Years '+ ' Today is your '+  + anniversary+ ' anniversary';
    // return message; 
    const message = `Hi, ${userName} Thank you for being with us from past ${noYears} Years Today is your ${noYears} anniversary`
    return message
}


console.log(generateMsg('Vishal Sharma', 2 , 0, 2, 2));
console.log(generateMsg('Raj', 1 , 0, 1, 1));


function paragraph () {
    // const message = 'ahbsvchs dvghc
    //         s bcds c'
    const message = `sbdhbc
    shjcbd
    bsbxc
     hsc s
      vb sd
       hgxc s
       s ch d
       bahcvd
       bsv cgv
        hgcdj
        `
        console.log(message);
}
paragraph()