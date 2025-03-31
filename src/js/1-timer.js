import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector("[data-start]");
const picker = document.querySelector("#datetime-picker");
const daysField = document.querySelector("[data-days]");
const hoursField = document.querySelector("[data-hours]");
const minutesField = document.querySelector("[data-minutes]");
const secondsField = document.querySelector("[data-seconds]");

let userSelectedDate;
let timeInterval;
startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate <= new Date()) {

            iziToast.warning({
                title: '',
                timeout: 20000,
                message: 'Please choose a date in the future',
                messageSize: '30px',    
                messageLineHeight: '1.5',     
                theme: 'dark',
                position: 'topRight',       
                backgroundColor: 'red',
         
            });
            startBtn.disabled = true;
        } else {  
            
            startBtn.disabled = false;            
        }    
  },
};

flatpickr(picker, options);

function startTimer() {
    startBtn.disabled = true;
    picker.disabled = true;

    timeInterval = setInterval(() => {

        const startTime = Date.now();
        const remainTime = userSelectedDate - startTime;

        if (remainTime <= 0) {
            clearInterval(timeInterval);
            picker.disabled = false;
            startBtn.disabled = true;
             updateTimerDisplay("00", "00", "00", "00");
      return;
        }
        const { days, hours, minutes, seconds } = convertMs(remainTime);
        updateTimerDisplay(days, hours, minutes, seconds);

    }, 1000);

}
 
startBtn.addEventListener("click", startTimer);
 
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = String(Math.floor(ms / day)).padStart(2, "0");  
 
  const hours = String(Math.floor((ms % day) / hour)).padStart(2, "0");
  
  const minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(2, "0");
  
  const seconds = String(Math.floor((((ms % day) % hour) % minute) / second)).padStart(2, "0");

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(days, hours, minutes, seconds) {
    daysField.textContent = days;
    hoursField.textContent = hours;
    minutesField.textContent = minutes;
    secondsField.textContent = seconds;

}

   


