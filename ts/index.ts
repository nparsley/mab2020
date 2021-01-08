class Car {
    // color: string;
    // private year: number; /* adding public and private in constructor below replaces this part */

    constructor(public color: string, private year: number) {
        // this.color = color; /* adding public and private in constructor above replaces this part */
        // this.year = year;
    }

    drive() {
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }

    private putInGear() {
        
    }

    private pressPedal() {

    }

    private turnWheel() {

    }

}

const myCar = new Car('red', 2000);
// myCar.drive();

// myCar.putInGear();

// console.log(myCar.color, myCar.year);

console.log(myCar.color);