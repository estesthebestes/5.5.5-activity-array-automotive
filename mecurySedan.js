//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends VehicleModule {
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

serviceCheck(){
    if (this.mileage > 10000) {
            this.scheduleService = true;
            return this.scheduleService;
        } 
}
