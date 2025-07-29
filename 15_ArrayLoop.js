// for of

// ["", "", ""]
// [{}, {}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world!"

for (const greet of greetings) {
    console.log(greet);
}

// Maps(unique value store)

// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, "=" ,value)
// }





// object
const myobj = {
    'game1': "Ludo",
    'game2': "FreeFire"
}
// for (const [key, value] of myobj) {
//     console.log(key, "=" ,value)
// }

// for in
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`)
}


const programmimg = ["js", "C++", "pyhton", "java"]

for (const key in programmimg) {
    console.log(programmimg[key])
}

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map)

// for (const key in map) {
//     console.log(map[key])
// }