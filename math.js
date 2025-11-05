// Interview question
// cna we change the Math.PI value? if no then why?

const descripter = Object.getOwnPropertyDescriptors(Math, "PI")

// console.log(descripter);
/* answer
    value: 'Math',
    writable: false,
    enumerable: false,
    configurable: true
     */

const one ={
    name: "one",
    course: "js",
    isAvailable : true,
    printMe(){
        console.log("hello");
    }
}
// console.log(one);
// console.log(Object.getOwnPropertyDescriptors(one, "name"));



// If you want to constant the value
Object.defineProperty(one, 'name',{
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(one, 'name'));

// one.name = "two"
// console.log(Object.getOwnPropertyDescriptor(one, 'name'));




for (let [key, vlaue] of Object.entries(one)) {
   
    if (typeof vlaue !== 'function') {
        console.log(`${key}: ${vlaue}`);
    }
    // console.log(`${key}: ${vlaue}`);
}