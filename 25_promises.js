// Promises
// create promise

const promiseOne = new Promise(function(resolve, reject){
//  do an async task
// DB calls, cryptography, network
setTimeout(()=>{
console.log("Async task is completed")
resolve()
}, 1000)
})


// .then is directly connected to resolve, it will execute when you add resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})




// second way to create promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 complete")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve({username: "Aarya", email: "one@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
     console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true;
        if(!error){
            resolve({username: "Piku", password: "123"})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
})

// chaining
const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    // It will return previous ans
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolve or reject"))




const promiseFive = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumedpromiseFive(){
try {
  
   const response = await promiseFive
   console.log(response);
} catch (error) {
    console.log(error); 
}
}
consumedpromiseFive();

// async function getAllUser() {
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("ERROR", error);
//    }
// }
// getAllUser()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})


