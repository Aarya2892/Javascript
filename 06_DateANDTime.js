let myDate = new Date(); //like this we can set the new date

console.log(myDate)
console.log(typeof myDate) //object

//to make the date in readable format
console.log(myDate.toString())           //Mon jul 14 2025 16:21:26 GMT+0000
console.log(myDate.toLocaleDateString()) //7/14/2025 for time toLocalTimeString
console.log(myDate.toDateString())       //Mon jul 14 2025


// you can customize your own date
let newDate = new Date(2023, 0, 23)
console.log(newDate);

// If you want to compare two time stamp that time you neeed .getTime() method

let mytime = Date.now();
console.log(mytime);
console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000));