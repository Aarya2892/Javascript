// Lexical Scoping

function OuterLoop(){
     let userName = "outer"
    //  console.log("OUTER", secret); 
     function innerLoop(){
        let secret = "mySecret"
        console.log("INNER", userName);
     }
     function innerLoopTwo(){
        console.log("INNERTWO", userName);
        // console.log(secret)
     }
     innerLoop();
     innerLoopTwo();
}

OuterLoop();
