/* 
funcions : are used to perform a task or calculate value
*/

//Declaring the function with no parameters.
//This function returns a value
function sum(){
var num1 = 10
var num2 = 20
var total = num1+num2
return total

}

//Calling a funtion
console.log(sum()) 

//Calling the function and storing in a new variable
const mySum = sum() +100 - 9
console.log(mySum)

//Declaring Functions with parameters and return
function diff (num1, num2){
    return num1 - num2
}

//Caling the function
console.log(diff(100,50))
 
const result = diff(1,90)
console.log(result)

//Declaring a function
//Assigning to a variable called squareOfNumber

const squareOfNumber = function square(num){
    return num*num
}

//Caling the function
console.log(squareOfNumber(8))

console.log(squareOfNumber(8)) //NaN
console.log(squareOfNumber(8,32,24,'John')) 
