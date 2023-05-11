function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let interval = null;
//console.log('interval ' + interval);

startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  //console.log(interval);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  //console.log(interval);
  //console.log(body.style.backgroundColor);
  startBtn.disabled = false;
});
