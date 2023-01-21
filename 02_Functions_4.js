//Traditional Function
function sum(a){
    return a+100
}
console.log(sum(10))


//Anonymous function
var newSum = function (a){
    return +100
}
console.log(newSum(11))

//Arrow Case 1: Fuction with one argument

//1. Remove function keyword, 
//and name 
//and use => between the parameter and body
var arroow = (a)=>{
    return a+100
}
console.log(arroow(12))

//2. We can make this even shorter
//Delete {} and return ketword
var arroow=(a)=>a+100
console.log(arroow(13))

//3. We can remove the parameters around input SINCE THERE IS ONLY ONE ARGUMENT
var arroow=a=>a+100
console.log(arroow(14))


//Arrow Case 2: Fuction with more than one argument

//Traditional Function
function sum(a,b){
    return a+b+100
}
console.log(sum(1,2))


//Anonymous function
var newSum = function (a,b){
    return a+b+100
}
console.log(newSum(5,2))

//1. Remove function keyword, 
//and name 
//and use => between the parameter and body
var arroow = (a,b)=>{
    return a+b+100
}
console.log(arroow(1,6))

//2. We can make this even shorter
//Delete {} and return keyword
var arroow=(a,b)=>a+b+100
console.log(arroow(1,8))

//We can remove the paranthesis around the parameter

//Arrow Case 3: Fuction with NO PARAMETER

//Traditional Function
var a=5,b=6
function sum(){
    return a+b+100
}
console.log(sum())

//Anonymous function
a=5
b=7
var newSum = function (){
    return a+b+100
}
console.log(newSum())

//1. Remove function keyword, 
//and name 
//and use => between the parameter and body
a=7
b=8
var arroow = (a,b)=>{
    return a+b+100
}
console.log(arroow(1,6))

//2. We can make this even shorter
//Delete {} and return keyword
a=7
b=8
var arroow=()=>a+b+100
console.log(arroow())