const btStart = document.querySelector("button[data-start]");
const btStop = document.querySelector('button[data-stop]');

btStop.setAttribute('disabled', 'disabled');
let timeColor = null;

btStart.addEventListener('click', onStart);
btStop.addEventListener('click', onStop);

function onStart() {
    timeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();}, 1000);
    btStart.setAttribute('disabled', 'disabled');
    btStop.removeAttribute('disabled', 'disabled');

    return
}

function onStop() {
    clearInterval(timeColor);
    btStart.removeAttribute('disabled', 'disabled');
    btStop.setAttribute('disabled', 'disabled');
    
    return
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}