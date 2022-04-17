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
  
  performMaintenance(){

    setTimeout(performMaintenance, 3000)

    function performMaintenance() {
      console.log('maintenance complete')
    }
  }
}

const mySweetRide = new Car ('Pontiac', 'Fiero', 1988)
mySweetRide.performMaintenance()
mySweetRide.honk()
