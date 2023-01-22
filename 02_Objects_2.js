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