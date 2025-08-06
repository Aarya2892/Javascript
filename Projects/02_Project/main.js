const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
     e.preventDefault();

     const height= parseInt(document.querySelector('#height').value);
     const Weight = parseInt(document.querySelector('#Weight').value);
     const results = parseInt(document.querySelector('#result'))

     if(height === '' || height <0 ){
        results.innerText = `Please give a valid height ${height}`;
     }else if(Weight === '' || Weight <0){
        results.innerText = `Please give a valid weight ${Weight}`;
     }else{
        const bmi = (Weight / (height * height)/1000).toFixed(2);
        results.innerText =`${bmi}`
        console.log(bmi);
     }
});
