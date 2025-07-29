// if

/*
if(true){
    // code will execute
}

if(false){
    // code will not execute
}
*/

// <, >, <=, >=,  ==, !=, ===(type check), &&, ||

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow user to buy the course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}


// Switch

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("default")
        break;
}
