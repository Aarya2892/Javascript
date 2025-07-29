const userEmailID = "one@gmail.com"

if(userEmailID){
    console.log("Got user email")
}else{
    console.log("Email not found")
}

// truthy values
// "0", "false", " ", [], {}, function(){}


// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty")
}

const userDetail = {}
if (Object.keys(userDetail).length === 0) {
    console.log("Object is empty")
}

// Nullish coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)

// Terniary operator
// condition ? true: false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")