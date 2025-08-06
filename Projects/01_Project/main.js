const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', (e)=>{
        console.log(e)
        console.log(e.target)
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }else if(e.target.id === 'yellow'){
        //     body.style.background = e.target.id;
        // }else if(e.target.id === 'blue'){
        //     body.style.background = e.target.id;
        // }else if(e.target.id === 'pink'){
        //     body.style.background = e.target.id;
        // }

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'white'
                break;
        
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black'
                break;
            
            case 'blue':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'white'
                break;
            
            case 'pink':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black'
                break;
            default:
                break;
        }
    })
})