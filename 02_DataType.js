//In javaScript we have primitive and non-primitive data type

//primitive -There are 7 data types

/*
number
bigInt
string
boolean
symbol
undefined
null
*/

const Id = 1
const name = "Aarya"
let isloggedIn = false
let password; //undefined
let authorized = null 

console.table([Id, name, isloggedIn, password, authorized])
console.log(typeof password); // type of undefined is undefined
console.log(typeof authorized); //type of null is object

//non=primitive data type -There are 3 non primitive data types
/*
object
Array
function
*/

const obj ={
    name: "Aarya",
    age: 18
}

const arr = ["Isha", "Vrushu", "Niku"]

const myfunction = function(){
    console.log("Hello Aarya")
}
myfunction();
