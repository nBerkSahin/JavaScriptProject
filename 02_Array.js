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