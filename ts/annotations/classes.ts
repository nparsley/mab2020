class Vehicle {
    // public drive(): void {
    //     console.log('heyyy');
    // }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
    private drive(): void {
        console.log('hellllo');
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const carr = new Car();
carr.startDrivingProcess();
carr.honk();
