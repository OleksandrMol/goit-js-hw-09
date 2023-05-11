import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputData = document.getElementById('datetime-picker');
const btStart = document.querySelector("button[data-start]");
const dataDay = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

btStart.addEventListener('click', startTime);
btStart.setAttribute('disabled', 'disabled');

let dateInputValue = 0;
const nowDate = new Date().getTime();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        dateInputValue = selectedDates[0].getTime();
        if (dateInputValue < nowDate){ 
            return window.alert("Please choose a date in the future")
        }
        btStart.removeAttribute('disabled', 'disabled');
        
        console.log(selectedDates[0]);
    },
};
const fp = flatpickr(inputData, options);

function startTime() { 

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000))