import Timer from './timers.js';

// const t1 = new Timer(50);
// console.log('timer 1', t1);

document.querySelector('#create-timer').addEventListener('click', addTimer);
const timerInput = document.querySelector('#time-input');

function addTimer() {
  const initialTime = timerInput.value;
  console.log('value from input', initialTime);
}
