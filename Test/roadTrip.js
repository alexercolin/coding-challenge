const AverageSpeed = require("./avgSpeed");
let distance = 50
let time = 10

class RoadTrip {
  constructor(averageSpeed) {
    this.averageSpeed = new AverageSpeed(distance, time);
  }

  showAverageSpeed() {
    return this.averageSpeed.calculate();
  }
}

const roadTrip = new RoadTrip()

console.log(roadTrip.showAverageSpeed())
