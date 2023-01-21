/*
Objects are used to store data
Objects are created using {}

*/

var fName = 'John'
var lName = 'Cash'
var age = 19
var info = `${fName} ${lName} ${age}`
console.log(info)

//Creating person object
var person = {
    fName:'John',
    lName:'Cash',
    age:19,
    isEmployed:true
}

//Calling the person object
console.log(person)

console.log(typeof(person))

//Calling the info using .notation
console.log(person.fName)
console.log(person.lName)
console.log(person.age)

console.log(typeof(person.lName))
console.log(typeof(person.age))

//Calling the info using [] notation. Less common
console.log(person['fName'])
console.log(person['lName'])
console.log(person['age'])
console.log(person['isEmployed'])

//*****Editting Objects*****
//1. Using . notation
person.fName='Sam'
person.lName='Walton'
console.log(person)

//1. Using [] notation
person['age']=60
person['isEmployed']=false

console.log(person)