//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.transmission = "automatic";
        this.passenger = 0;
        this.numberOfWheels = 4; 
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.fuelMileageHwy = 28;
        this.fuelMileageCity = 20;
    }
}

serviceNeeded(); {
    if (this.mileage > 30000) {            
        this.scheduleService = true
        this.scheduleService;                       
    }
}

loadPassenger(passenger, maximumPassengers) { 
    if (this.passenger < this.maximumPassengers) {
        console.log('You have room for more passengers.');
    } else {
        console.log('You are at maximum capacity.');
    }
}

start() {
    if (this.fuel > 0){
        return this.started = true;
        console.log("engine started...!!!");
    } else {
        return this.started = false;
        console.log("engine cannot start...");
    }
}
