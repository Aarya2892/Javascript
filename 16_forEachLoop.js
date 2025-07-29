// for_each

const coding = ["java", "c", "c++", "python"]

coding.forEach((item)=>{
    console.log(item)
})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})

const myCoding =[
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach((item)=>{
  console.log(`Language Name : ${item.languageName} and File Name ${item.languageFile}`)
})