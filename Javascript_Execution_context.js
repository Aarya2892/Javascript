// Global --> this

/*
Types
1. Global execution phase
2. Functional Execution Phase
3. Eval execution phase
*/

/*
{}     --> 1. Memory creation phase
code       2. Execution phase
*/


let val1 = 10;
let val2 =5;

function addnum(num1, num2){
    let result = num1 + num2;
    return result;
}

let result1 = addnum(val1, val2)
let result2 = addnum(4,6)

/*
How it will execute
1. Global --> this 

2. Memory creation phase
   val1 --> undefined
   val2 --> undefined
   addnum --> defination
   result1 -->undefined
   result2 -->

3. execution Phase
   val1 -->10
   val2 -->5
   addnum --> It will create new execution phase 
            1.Memory execution      2. Execution context
            val1 --> undefined        num1 --> 10
            val2 --> undefined        num2 --> 5
            result --> undefined      result --> 15 --> It will return in global executional context
after call this new execution phase get deleted

then again we go in execution phase

again one new variable environment + thread
1.memory phase    2.Execution phase

*/






// call stack in crome--> source --> call stack
/* LIFO

                     three()
                     two()       
                     one()
                     global execution
*/