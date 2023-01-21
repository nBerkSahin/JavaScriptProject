/* 
funcions : are used to perform a task or calculate value
*/

// 1. Declare the function with no parameter
function greet(){
    console.log('Hi !!!')
}

//2. Call the function
greet(); //Hi!!!

//3. Declaring a function with parameter
function greetPeople(nameOfPerson){
    console.log('Hi ' +nameOfPerson);
}

//4. Calling the funtion
greetPeople('John') //Hi John
greetPeople(true) //Hi true
greetPeople(10) //Hi 10
greetPeople('sam','tom',10) //Hi sam

//5. Declaring function with more than one parameter
function information (location, price, schoolRating){
    console.log(`
    Location : ${location} 
    Price : ${price} 
    School Rating : ${schoolRating}`);
}

//6. Calling the function
information('Dallas',50000,'A+')

/*
Parameter     |  Argument/Values
Location      |  Dallas
Price         |  50000
School Rating |  A+

*/