const form = document.querySelector('form')

const random = Math.round(Math.random()*100 +1);
    // console.log(random);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const input = parseInt(document.querySelector('.input').value);
    const answer = document.querySelector('#answer');
    const randomNumber = document.querySelector('#randomNumber');

    console.log(input);
    if(input === random){
        answer.innerHTML =`<span> Same number </span>`
        answer.style.color = "green"
    }else{
        answer.innerHTML =`<span> Not same Number </span>`
        answer.style.color = "red"
    }
    
    randomNumber.innerHTML = `<span>${random}</span>`
    
})

