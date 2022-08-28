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

  function createStartButton() {
    const startButton = document.createElement('button');
    startButton.innerText = 'Start';
    startButton.addEventListener('click', startTimer);
    timerElement.appendChild(startButton);
  }

  function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTimer);
    timerElement.appendChild(deleteButton);
  }

  function createPauseButton() {
    const pauseButton = document.createElement('button');
    pauseButton.innerText = 'Pause';
    pauseButton.addEventListener('click', stopTimer);
    timerElement.appendChild(pauseButton);
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

    createStartButton();
    createPauseButton();
    createDeleteButton();

    document.querySelector('#timers-container').appendChild(timerElement);
  };
}
