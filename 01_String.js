/* Strings

String : '' , ""
Number : int, double, ...
Boolean : true , false
Undefined : not initiliazed
Null : used to initialize the 



*/

var myName = 'John'
var myLesson = 'javasript'

//print : John loves javasript
var message =myName +' loves '+myLesson
console.log(message);

//print : John loves 'javasript'
console.log("John loves 'javasript'");//hardcode
console.log(myName +' loves '+"'"+myLesson+"'")

//BACKTICK(``) IN JS
//Backtşck by default used as ''
//When we want to pass variables, then we use ${variable}
var message = `${myName}`;
console.log(message);
