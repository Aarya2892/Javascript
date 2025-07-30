const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNumbers.map((num)=> num+10)
// console.log(newnums);

// chaining
const newNums = myNumbers
                   .map((num)=> num *10)
                   .map((num)=> num +1 ) //11,21,31,41,51.....
                   .filter((num) => num >= 40) //41,51,61,71.....

console.log(newNums)








// reduce
const mynum = [1,2,3]

const initialvalue = 0
const myTotal = mynum.reduce((accumulator, currentValue)=> accumulator + currentValue, initialvalue)
// const myTotal  = mynum.reduce((acc, cvalue)=>{
//     console.log(`acc : ${acc} and current Value : ${cvalue}`)
//      return acc + cvalue
// },0)
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 1999
    },
    {
        itemName: "java",
        price: 2099
    },
    {
        itemName: "c++",
        price: 3599
    }
]

const totalCartValue = shoppingCart.reduce((acc, item)=> acc+ item.price, 0)
console.log(totalCartValue)