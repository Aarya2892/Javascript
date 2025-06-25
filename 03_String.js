// String is the most imp part of coding

const name = "Aarya"
const age = 21

// to concatination please used modern way 
console.log(`Hello everyone my name is ${name} and I'm ${age} years old`)

// There are lots of methos we have in string
/*
charAt
indexof
toLowercase
toUppercase
split()
trim()
slice
replace
*/

const gameName = "Freefire"
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());


// trim remove the white spaces 
const str= "     hello Aarya     " 
console.log(str.trim());

// split method split the words into array 
const str1 = "hello world"
console.log(str1.split(" ")); //['hello', 'world']

//replace("replace world", "new world")
console.log(str1.replace("hello", "Hi"))

//slice(start, end)
const str2 = "myname"
console.log(str2.slice(3)); //ame

