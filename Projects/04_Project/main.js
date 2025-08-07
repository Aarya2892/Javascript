
const random = Math.round(Math.random()*100 +1);
    // console.log(random);

const submit = document.querySelector('#submit')
const input = document.querySelector('.input')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess =1

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const guess = parseInt(input.value)
    validateGuess(guess);
  })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert("Please Enter valid number")
    }else if(guess < 1){
      alert("Please Enter number more than 1")
    }else if(guess > 100){
      alert("Please Enter a number less than 100")
    }else{
      prevGuess.push(guess);
      if(numGuess === 11){
        displayGuess(guess);
        displayMsg(`Game Over. Random Number was ${random}`);
        endGame();
      }else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }
}
function checkGuess(guess){
    if(guess === random){
      displayMsg(`You guessed it right`)
      endGame();
    }else if(guess < random){
      displayMsg(`Entered number is Less`)
    }else if(guess > random){
      displayMsg(`Entered number is High`)
    }
}
function displayGuess(guess){
    input.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML =`${11- numGuess}`
}
function displayMsg(msg){

}
function endGame(){
    
}

function newGame(){

}







// const form = document.querySelector('form')
// const random = Math.round(Math.random()*100 +1);
//     // console.log(random);

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     const input = parseInt(document.querySelector('.input').value);
//     const answer = document.querySelector('#answer');
//     const randomNumber = document.querySelector('#randomNumber');
//     const reload = document.querySelector('#reload');

//     console.log(input);
//     if(input === random){
//         answer.innerHTML =`<span> Number Match </span>`
//         answer.style.color = "green"
//     }else{
//         answer.innerHTML =`<span> Not same Number </span>`
//         answer.style.color = "red"
//     }
    
//     randomNumber.innerHTML = `<span>${random}</span>`
//     reload.innerHTML =`<a href="/Projects/04_Project/index.html">Reload</a>`
// })

