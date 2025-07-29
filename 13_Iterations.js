// Iterations means loops

// 1. for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element)
}
 
const array =[10,20,30,40,50]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==5){
    //   console.log("Element is 5")
    }
    // console.log(element)
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
    //    console.log(`Inner loop ${j} and outer loop ${i}`)
    // console.log(i + "*" + j + ' = ' +  i*j);
    }
    
}

const myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5")
        break;
    }
    console.log(`value of i is ${i}`)
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5")
        continue;
    }
    console.log(`value of i is ${i}`)
}