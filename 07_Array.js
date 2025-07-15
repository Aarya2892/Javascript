const arr = [1,2,3,4,5,6]

// arr.push(7); //pop
// console.log(arr);

// arr.pop() //It will remove last element
// console.log(arr)

// console.log(arr.includes(4));
// console.log(arr.indexOf(4))

// arr.unshift(9)
// console.log(arr)


// Slice and splice is most imp in arr

const arr1 = [1,2,3,4,5,6,7]
console.log(arr1)
console.log(arr1.slice(1,4)) //[2,3] It will start from index 1 and take upto 3 it will not take 4

console.log(arr1.splice(1,4)); //It will create two arr one with mention index and one for remaining one and return first one
console.log(arr1) //[1,6,7]

const marvel_heros = ["thor", "Ironman", "spiderman"]
const Dc_heros = ["superman", "flash", "batman"]

// to merge the two array
// marvel_heros.push(Dc_heros)
// console.log(marvel_heros)

marvel_heros.concat(Dc_heros)
console.log(marvel_heros);

// another way to merge array (spread operation)
const all_new_heros = [...marvel_heros, ...Dc_heros]
console.log(all_new_heros);


// flat returns new array with all sub array
const flat_array = [1,2, [3,4], [5,[6,7]], 8]
const real_array = flat_array.flat(Infinity)
console.log(real_array);


// sometimes we fetch the data from UI and it is in different different format but we want that data in array format then used Array.from
console.log(Array.from("Aarya")) //it will convert it into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))