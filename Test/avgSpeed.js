class AverageSpeed {
  constructor(distance, time) {
    this.distance = distance;
    this.time = time;
  }

  calculate() {
    return this.distance / this.time;
  }
}

module.exports = AverageSpeed


