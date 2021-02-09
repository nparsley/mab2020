
// interface Vehicle {
    interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string;

}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }

};



// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    const printSummary = (item: Reportable): void => {
/*     console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`); */

    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);