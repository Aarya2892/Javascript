let i=0;
while (i<=10) {
    console.log(`value of index is ${i}`);
    i = i+2;
}

const myArray = ["flash", "superman", "badman"]
let arr =0;
while (arr < myArray.length) {
    console.log(myArray[arr])
    arr++
}

// do while loop
let score = 1; //if score is 11 then also it will print the score 
do {
    console.log(`score: ${score}`)
    score++;
} while (score <= 10);