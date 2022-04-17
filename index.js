// YOUR CODE HERE

class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  honk() {
    console.log("BEEP BEEP!")
  }
}

const mySweetRide = new Car ('Pontiac', 'Fiero', 1988)
