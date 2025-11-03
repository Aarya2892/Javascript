// OOPS

const user ={
    userName: "Lio",
    logincount: 8,
    signedIn : true,

    getUserDetail: function(){
        // console.log("Got data from the DB")
        // console.log(`username: ${this.userName}`)
        // console.log(this)
    }
}

// console.log(user.getUserDetail());
// console.log(this)



// to do the repetative work we used constructor
// constructor
// const promiseone = new Promise()

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.userName}`)
    }

    return this
}

const UserOne = new User("One", 4, true)
console.log(UserOne.constructor)
console.log(UserOne.greeting())
// console.log(UserOne.isLoggedIn)

const UserTwo  = new User("Lio", 23, false)
// console.log(UserTwo)