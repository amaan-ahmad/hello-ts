interface vehicle {
    make: string,
    model: string,
    year: number, 
    isElectron: boolean,
};


class Car {
    make: string;
    model: string;
    year: number;
    isElectron: boolean;

    constructor(car: vehicle){
        this.make = car.make;
        this.model = car.model;
        this.year = car.year;
        this.isElectron = car.isElectron;
    }
}


function printCar(car: vehicle){
    console.log(car.make);
    console.log(car.model);
    console.log(car.year);
    console.log(car.isElectron);
}

const bmw: vehicle = {
    make: "BMW", 
    model: "A3", 
    year:  2005,
    isElectron: true
};