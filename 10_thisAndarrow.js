// This used to refer the current context (like current value)

const user = {
    username: "Aarya",
    price: 199,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
 
console.log(this) //{}

// function myfun(){
//     let username = "aarya"
//     console.log(this.username);
// }
// myfun() //undefined [you will not access the this in normal function]


// const chai= ()=>{
//     let username = "aarya";
//     console.log(this.username);
// }
// chai(); //undefined [same like regular function]




// Arrow function
// const addTwo =(num1, num2)=>{
//    return num1+num2; //if your using {} then you have to used return
// }
// console.log(addTwo(3,4));


// const addTwo =(num1, num2)=> num1+num2; //implesit function
// const addTwo =(num1, num2)=> (num1+num2);
const addTwo =(num1, num2)=> ({username: "lio"})
console.log(addTwo(3,4));

const myarr = [1,2,3,4,5]
myarr.forEach(()=>{
    console.log()
})

