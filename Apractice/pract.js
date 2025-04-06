let a = 50;
var b = 40;//updated to 90
{
  console.log(b);//40
//   console.log(a); 
  var b = 90;
  let a = 200;
}

//var  let const 
function call() {
   // console.log(b); 
   console.log(b); //undefined
   let a = 55;
   var b = 65;
   console.log(a);//55
   console.log(b);//65
 }

 call();
 console.log(a);//50
 console.log(b);//90
