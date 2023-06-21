class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    if (this.currentTime === 0){
      return 0
    }
    else if (this.currentTime > 59){
      return this.currentTime % 60
    }
    else {
      return this.currentTime
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return "0"+value}
    else {
      return (""+value)
    }
  }


  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes= this.computeTwoDigitNumber(this.getMinutes())
    let seconds=this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`;
  }
  
}

