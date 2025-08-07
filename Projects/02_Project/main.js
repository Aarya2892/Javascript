
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
     e.preventDefault();

     const height= parseInt(document.querySelector('#height').value);
     const Weight = parseInt(document.querySelector('#Weight').value);
     const results = document.querySelector('#results');

     if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
     }else if(Weight === '' || Weight <0 || isNaN(Weight)){
        results.innerHTML = `Please give a valid weight ${Weight}`;
     }else{
        const bmi = (Weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML =`<span>${bmi}<span>`
      //   console.log(bmi);

      const info = document.querySelector("#info")
      if(bmi < 18.6){
         info.innerHTML = `<p>Under Weight</p>`
      }else if(bmi >=18.6 && bmi <= 24.9){
         info.innerHTML = `<p>Normal Range</p>`
      }else if (bmi > 24.9){
         info.innerHTML = `<p>Overwight</p>`
      }
     }

});
