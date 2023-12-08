
let valueDisplays =document.querySelectorAll('.num');

let interval = 50000;


valueDisplays.forEach((value) => {
  let startValue = 0;

  let endValuel = parseInt(value.getAttribute("data-val"));
  let duration = Math.floor(interval / endValuel);

  let counter = setInterval(function(){
    startValue +=1;
    value.textContent = startValue;
    if(startValue == endValuel){
      clearInterval(counter)
    }
    
  }, duration)
})