// If you want to add symbol in object the it will written as [mySym]
// const mySym = Symbol("key1")

// const jsUser ={
//     name : "Aarya",
//     [mySym] : "symbol",
//     age : 22,
//     email : "one@gmail.com",
//     isLoggedIn : false,
//     lastLoggedIn : ["Monday", "saturday"],
//     "full name" : "Aarya Patil"
// }

// console.log(jsUser)

// sometimes values are get written into string to fetch that used
// console.log(jsUser["full name"])

// jsUser.email = "two@gamail.com"

// console.log(jsUser)

// If you want to lock the value
// Object.freeze(jsUser)
// jsUser.email = "three@gmail.com"
// console.log(jsUser)


// function
// const myFun = function(){
//     console.log(`hello ${this.name}`)
// }
// console.log(myFun())

// const myFun2 = function(){
//     console.log(`hello ${jsUser.age}`)
// }
// console.log(myFun2())

//singleton object

const tinderUser = new Object();
// const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name = "Lio"
tinderUser.email = "one@gmail.com"
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const regularUser ={
    name : "Aarya",
    email: "one@gmail.com",
    fullName: {
        firstName: "Aarya",
        lastName: "Patil"
    },
    isLoggedIn: false
}

console.log(regularUser.fullName.lastName);

// combination
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)


// de-structuring

const courseInfo ={
    name: "Js",
    courseteacher: "Hitesh",
    coursePrice: "999"
}

// console.log(courseInfo.courseteacher) //instead of using this 

const {courseteacher : teacher} = courseInfo;
console.log(teacher);