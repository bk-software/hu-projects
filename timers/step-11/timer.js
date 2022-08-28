//timer.js
export default function Timer(initialTime) {
  let time = initialTime;
  let timerElement;
  let timeView;
  let intervalId;
  let isTimerRunning = false;

  function displayTime() {
    time--;
    timeView.innerText = time;

    if (time == 0) {
      stopTimer();
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    isTimerRunning = false;
  }

  function startTimer() {
    if (isTimerRunning) {
      return;
    }
    intervalId = setInterval(displayTime, 1000);
    isTimerRunning = true;
  }

  function deleteTimer() {
    timerElement.remove();
  }

  function createButton(buttonText, eventFunction) {
    const button = document.createElement('button');
    button.innerText = buttonText;
    button.addEventListener('click', eventFunction);
    timerElement.appendChild(button);
  }

  function createTimeView() {
    timeView = document.createElement('span');
    timerElement.appendChild(timeView);
  }

  this.createTimer = function () {
    console.log('create timer', time);

    timerElement = document.createElement('div');

    createTimeView();
    timeView.innerText = time;

    createButton('Start', startTimer);
    createButton('Pause', stopTimer);
    createButton('Delete', deleteTimer);

    document.querySelector('#timers-container').appendChild(timerElement);
  };
}
