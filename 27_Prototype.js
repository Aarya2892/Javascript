// object

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(userName, score) {
    this.userName = userName;
    this.score = score
}
createUser.prototype.increament = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`)
}

const userOne = new createUser("lio", 56)
const userTwo = createUser("two", 44)

userOne.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/














// Prototype

let myArray = ["one", "two"]

let user = {
    userName: "Three",
    score: 78,

    greeting: function(){
        console.log(`Hello ${this.userName} your score is ${this.score}`)
    }
}

Object.prototype.printMe = function(){
    console.log("It is present in all object")
}
user.greeting();
user.printMe();  // if you used Object.prototype then it is accessible for all
myArray.printMe();


Array.prototype.scorePrint = function(){
   console.log("It is present in array only")
}
myArray.scorePrint(); 
// user.scorePrint();//object can't access it








// Inheritance
const Student ={
    name: "Lio",
    email: "one@gmail.com"
}

const Teacher = {
    subject: "js"
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    assignment: "js Assignment",
    __proto__: TeachingSupport
}

Teacher.__proto__ = Student

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)




let anotherUsername = "chaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}
anotherUsername.trueLength();
"dog".trueLength();


