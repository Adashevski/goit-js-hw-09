import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
const datePicker = document.querySelector('#datetime-picker');
let interval;

// wyświetlanie czasu
function formatValue(value) {
  return value < 10 ? `0${value}` : value;
}

function updateCountdownView({ days, hours, minutes, seconds }) {
  daysValue.textContent = formatValue(days);
  hoursValue.textContent = formatValue(hours);
  minutesValue.textContent = formatValue(minutes);
  secondsValue.textContent = formatValue(seconds);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

// odliczanie

function countdown(countdownTime) {
  const timeDiff = countdownTime - new Date().getTime();

  if (timeDiff <= 0) {
    clearInterval(interval);
    return;
  }

  const timeUnits = convertMs(timeDiff);
  updateCountdownView(timeUnits);
}

function startCountdown(countdownTime) {
  clearInterval(interval);

  interval = setInterval(() => {
    countdown(countdownTime);
  }, 1000);
}

//sprawdzanie daty

function validateDate(selectedDates) {
  const selectedDate = selectedDates[0];

  if (selectedDate <= new Date()) {
    window.alert('Please choose a date in the future');
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
    startBtn.addEventListener('click', () =>
      startCountdown(selectedDate.getTime())
    );
  }
}

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: validateDate,
});

startBtn.addEventListener('click', () => {
  const countdownTime = new Date(datePicker.value).getTime();
  startCountdown(countdownTime);
});
