const coding = ["js", "python", "c++", "java"]

const values = coding.forEach((item)=>{
    // console.log(item)
    return item;
})
// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9];
const nums = myNums.filter((item)=>{
   return item > 4
})
// console.log(nums)


const newNums = [];
myNums.forEach((num)=>{
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   return all the book whose genre is History
//  const userBooks = books.filter((book) => book.genre === 'History')
  const userBooks = books.filter((book)=>{
     if(book.genre === 'History'){
        return book;
     }
  })
//   console.log(userBooks)

// fetch all the book those publish after 2000
// const bookPublish = books.filter((book) => book.publish >= 2000)
const bookPublish = books.filter((book)=>{
    return book.publish >= 2000
})
// console.log(bookPublish)

// fetch the publish after 1997 or genre = 'history

const bookInfo = books.filter((book)=> {
    return book.publish >= 1997 && book.genre === "History"
})
console.log(bookInfo)
