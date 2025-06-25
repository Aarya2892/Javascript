/*
There are two types of memory 
1. Stack (Primitive data mostly used stack memory)
2. Heap (Non- primitve data used heap memory)

stack - give the copy of that value, if you change the value then it change the copy not the original value
heap - give the refrence to that value
*/

// stack
const gameName = "freefire"
var newgame= gameName;
newgame = "PubG"
console.log(newgame); //PubG
console.log(gameName); //freefire

// Heap
const obj1 ={
    name: "Aarya"
}

var obj2 = obj1
console.log(obj2.name);

obj2.name = "Isha";
console.log(obj2.name); //Isha
console.log(obj1.name); //Isha

