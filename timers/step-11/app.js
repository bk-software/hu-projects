//app.js
import Timer from './timer.js';

const timerInput = document.querySelector('#time-input');

function addTimer() {
  const initialTime = timerInput.value;
  console.log('add timer', initialTime);
  const timer = new Timer(initialTime);
  timer.createTimer();
  console.log('timer', timer);
}

//add click event listener to the add timer button
document.querySelector('#create-timer').addEventListener('click', addTimer);
