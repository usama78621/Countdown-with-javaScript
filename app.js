const newYearEl = '1 Jan 2023';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minusEl = document.getElementById('minus');
const secondEl = document.getElementById('Second');

function countdown (){
    const newYearDate = new Date(newYearEl);
    const currentDate = new Date ();
    const totlaValue = (newYearDate - currentDate ) / 1000;
     
      const days = Math.floor(totlaValue / 3600 / 24);
      const hours = Math.floor(totlaValue / 3600) % 24;
      const minus = Math.floor(totlaValue / 60) % 60;
      const second = Math.floor(totlaValue % 60);
    
      daysEl.innerHTML = days;
      hoursEl.innerHTML = hours;
      minusEl.innerHTML = minus;
      secondEl.innerHTML = second;

}
countdown();
 setInterval(countdown,1000);
