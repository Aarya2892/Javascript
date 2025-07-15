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
console.log(marvel_heros.push(dc_heros))

