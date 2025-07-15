// If you want to add symbol in object the it will written as [mySym]
const mySym = Symbol("key1")

const jsUser ={
    name : "Aarya",
    [mySym] : "symbol",
    age : 22,
    email : "one@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "saturday"],
    "full name" : "Aarya Patil"
}

console.log(jsUser)

// sometimes values are get written into string to fetch that used
console.log(jsUser["full name"])

jsUser.email = "two@gamail.com"

console.log(jsUser)

// If you want to lock the value
// Object.freeze(jsUser)
// jsUser.email = "three@gmail.com"
// console.log(jsUser)


// function
const myFun = function(){
    console.log(`hello ${this.name}`)
}
console.log(myFun())

const myFun2 = function(){
    console.log(`hello ${jsUser.age}`)
}
console.log(myFun2())