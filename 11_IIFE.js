//Immediately Invoked Function Expression
// ()();
// when you write two IIFE's seprate it with ; otherwise it will throw an error

//when you gave name to function it called named IIFE
(function chai(){ 
    console.log("Hello Aarya")
})();

((name)=> {
    console.log(`Good Morning ${name}`)
})("Aarya");