import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputData = document.getElementById('datetime-picker');
const btStart = document.querySelector("button[data-start]");
const dataDay = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');


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
            return Notiflix.Notify.failure("Please choose a date in the future")
        }
        btStart.removeAttribute('disabled', 'disabled');
        
      btStart.addEventListener('click', () => {
        inputData.setAttribute('disabled', 'disabled')
        const intervalId = setInterval(() => {
        const differenceInTime = selectedDates[0] - new Date();

        if (differenceInTime < 1000) {
          clearInterval(intervalId);
          inputData.removeAttribute('disabled', 'disabled')
        }
          const result = convertMs(differenceInTime);
          btStart.setAttribute('disabled', 'disabled');
          

        viewOfTimer(result);
      }, 1000);
      })

    },
};
const fp = flatpickr(inputData, options);

function viewOfTimer({ days, hours, minutes, seconds }) {
  dataDay.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

