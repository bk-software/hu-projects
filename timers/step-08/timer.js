//timer.js
export default function Timer(initialTime) {
  let time = initialTime;
  let timerElement;

  function createStartButton() {
    const startButton = document.createElement('button');
    startButton.innerText = 'Start';
    timerElement.appendChild(startButton);
  }

  this.createTimer = function () {
    console.log('create timer', time);

    timerElement = document.createElement('div');
    timerElement.innerText = time;

    createStartButton();

    document.querySelector('#timers-container').appendChild(timerElement);
  };
}
