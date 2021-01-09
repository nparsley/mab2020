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


// class NumberHolder {
//     value: number;
// }

// class StringHolder {
//     value: string;
// }

// class BooleanHolder {
//     value: boolean;
// }

// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

// const stringHolder = new StringHolder();
// stringHolder.value = 'A string';


class ValueHolder<T> {
    value: T;
}

const numberWrapper = (value: number): number[] => {
    return [value];
};


const stringWrapper = (value: string): string[] => {
    return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
    return [value];
};

const valueWrapper = <T>(value: T): T[] => {
    return [value];
};

// valueWrapper<number>(10);
// valueWrapper<boolean>(true);
// valueWrapper<string>('hello');

const value = valueWrapper(10);
const sameValue = valueWrapper<number>(10);