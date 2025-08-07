const form = document.querySelector('form')

const getSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess =1

let playGame = true;

if(playGame){
    
}

function validateGuess(guess){
      
}
function checkGuess(guess){

}
function displayGuess(guess){

}
function displayMsg(msg){

}
function endGame(){
    
}

function newGame(){

}


const random = Math.round(Math.random()*100 +1);
    // console.log(random);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const input = parseInt(document.querySelector('.input').value);
    const answer = document.querySelector('#answer');
    const randomNumber = document.querySelector('#randomNumber');
    const reload = document.querySelector('#reload');

    console.log(input);
    if(input === random){
        answer.innerHTML =`<span> Number Match </span>`
        answer.style.color = "green"
    }else{
        answer.innerHTML =`<span> Not same Number </span>`
        answer.style.color = "red"
    }
    
    randomNumber.innerHTML = `<span>${random}</span>`
    reload.innerHTML =`<a href="/Projects/04_Project/index.html">Reload</a>`
})

