// interface Driveable {
//     speed: number;
//     drive(): string;
// }

// class Car implements Driveable {
//     speed = 10;

//     drive() {
//        return (`i am driving at ${this.speed}`);
//     }
// }

// const myCar = new Car();

// const startDriving = (vehicle: Driveable) => {
//     vehicle.drive();
// };

// startDriving(myCar);


class NumberHolder {
    value: number;
}

class StringHolder {
    value: string;
}

class BooleanHolder {
    value: boolean;
}

// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

// const stringHolder = new StringHolder();
// stringHolder.value = 'A string';


class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value;

new ValueHolder<string>();
new ValueHolder<boolean>();

