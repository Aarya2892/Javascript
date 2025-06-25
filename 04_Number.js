// Number

const count= 21
const score = new Number(100.88)

console.log(count);
console.log(score);

/*
Methods in Numbers
toString
toFixed
toLocalString
toPrecision
*/

console.log(count.toString().length)

// toFixed() used to fixed the number after decimal
console.log(score.toFixed(3))

//toPrecision used to round off
console.log(score.toPrecision(3));

// toLocalString() used to count the value in Indian way
const score1 = 1000000
console.log(score1.toLocaleString('en-IN'))

