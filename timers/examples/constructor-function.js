//timer.js
export default function Timer() {
  const a = 34;
  this.initialTime = 32;
  this.createTimer = function () {
    console.log('create timer');
  };
  console.log('my timer');
}

// create objects using Timer function
//like this new Timer()
// will create object like the following

const obj = {
  initialTime: 32,
  createTimer: function () {
    console.log('create timer');
  },
};

obj.initialTime;
obj.createTimer();
