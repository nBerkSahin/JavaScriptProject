/* 
funcions : are used to perform a task or calculate value
*/


//We can call the function before or after
add(5,5) //10
    function add(a,b){
        console.log(a+b)
    }

add(4,5) //9

//****************Anonymous*************/

//1. Creating an Anonymous function
//And putting the container
var result = function (a,b,c){
    return a+b+c
}

//2. Calling function using the container
console.log(result(2,3,6))

//3. Creating another Anonymous function
let info = function (fName, lName, age){
    console.log(fName,' '+lName+' ',+age)
}

//ABOVE CODE IS SAME AS THIS CODE
//function (fName, lName, age){
//    console.log(fName,' '+lName+' ',+age)
//}

info('John','cash',40)
