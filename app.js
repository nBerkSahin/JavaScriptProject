/*
ARRAYS

Collection of element
Arrays are special type of object

We use [] to create arrays
We use index to read arrays

*/

//Declaring array
var friendList=['Ken','jim','sam','tom']

//new keywod can also be used
var friendList1 = new Array('sam','tim','tom','jim')


//Reading the array
console.log(friendList)
console.log(friendList1)
console.log(friendList[0])
console.log(friendList[2])
console.log(friendList[3])

//Editing Arrays
//Change Sam --> Sue
friendList[0]='Sue'
console.log(friendList)

friendList[3]='John'
console.log(friendList)

//Adding new values in the array
friendList[4]='Nancy'
console.log(friendList)

friendList[8]='Sally'
console.log(friendList)

/*
fName : John --> String
age : 20 --> Number
isEmployed : true --> Boolean

adress : cadde = 4.cadde,
    sokak=5.sokak,
    ilçe=Kadıkoy, 
    il=İStanbul,
    ülke=Türkiye

hobbies : swimming, painting, coding, gaming, running --> Array

*/

const person = {
    fName:'John',
    age:20,
    isEmployed:true,
    adress : {cadde : '4.cadde',
    sokak:'5.sokak',
    ilce:'Kadıkoy', 
    il:'İStanbul',
    ulke:'Türkiye'
    },
    hobbies : ['swimming','painting','coding','gaming','running']
}

//Calling
console.log(person)
console.log(person.fName)
console.log(person.isEmployed)
console.log(person.age)
console.log(person.adress)

console.log(person.adress.sokak)
console.log(person.adress.cadde)
console.log(person.adress.ilce)
console.log(person.adress.il)
console.log(person.adress.ulke)

console.log(person.hobbies[0])
console.log(person.hobbies[1])
console.log(person.hobbies[2])
console.log(person.hobbies[3])
console.log(person.hobbies[4])
console.log(person.hobbies[10])