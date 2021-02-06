import { NamedTupleMember } from "typescript";

let apples: number = 5;
let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// classes
class Car {

}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};