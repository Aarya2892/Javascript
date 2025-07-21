function addTwonumber(num1, num2){
    let result = num1+num2;
    return result; //after return nothing will execute
}
const result = addTwonumber(4,5);
console.log(result);


// function userLoggedIn(username){
//     if(username === undefined){
//          return "Enter user name"
//     }else{
//         return `${username} just logged in`
//     }
// }

function userLoggedIn(username = "sam"){ // default value
    if(!username){
        console.log("Enter user name")
        return;
    }else{
        return `${username} just logged in`
    }
}
console.log(userLoggedIn("Aarya"));
// console.log(userLoggedIn()); //undefined just logged in






// function with object
// Cart -->If you are working on cart component and you are just adding the items in it, so just used rest operator
 function myCart(...num1){
    return num1;
 }
 console.log(myCart(200,400,500, 600));


 const user ={
    name: "Aarya",
    price: 199
 }

 //anyobject is used to take the any object 
 function handleObject(anyobject){
    console.log(`My name is ${anyobject.name} and the course price is ${anyobject.price}`)
    return;
 }
//  handleObject(user); // you have to gave the object name here

// you can pass the user like this also
handleObject({
    name: "Aarya",
    price: 159
})

// function with array
const myArray = [200, 400, 500];

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 400, 500]))