const time = document.querySelector('#time');

// const currentTime = Date.now();
// time.innerText = `${currentTime}`

setInterval(()=>{
   let currentTime = new Date();
   time.innerText = currentTime.toLocaleTimeString();
},1000)