let a = "aisef";
const b = "556";

console.log(a+b);

let lastlogindatw = "null";
lastlogindatw= 10;
console.log(lastlogindatw);

// VIDEO 4 :
// agar pahele condition pass ho gayi, toh baki ke conditions check nhi hote
const age = 21;
if(age>15){
    console.log("you are into your teen");
}
else if(age>20){ 
     console.log("you are an adult");
}
else{
     console.log("you are still a kid")
}
/// TERNERY OPERATOR
// shortcut of if else if --this is used only for 2 conditions haa ya naa
 const umar = 90;
 umar>=18 ?  console.log("yes") :  console.log("no");
/// another shortcut
 let result = umar>=18 ? "yes" : "no";
  console.log(result);

  // SWITCH CASE

  const option = 1;

  switch(option){
    case 1 :  console.log("namaste");
    break;
    case 2 :  console.log("hello")
    break;
    case 3 : console.log("bonjor");
    break;
    default :  console.log("invalid option");
  }