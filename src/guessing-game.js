class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
      this.array = Array.apply(null, {length: this.max + 1}).map(Number.call, Number).slice(this.min);
      this.half = Math.floor(this.array.length/2);
    }

    guess() {
      if(((this.max + this.min)/2) === this.array[this.half] || (Math.ceil(this.array[this.half]))) {
      return this.array[this.half];
      }
    }

    lower() {
      this.setRange(this.min, this.array[this.half]);
      this.guess();
    }

    greater() {
      this.setRange(this.array[this.half], this.max);
      this.guess();
    }
}

module.exports = GuessingGame;
