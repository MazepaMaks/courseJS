//Task1
//1.1
day = new Date();
let time = {
    hours: day.getHours(),
    minutes: day.getMinutes(),
    seconds: day.getSeconds(),
};
console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
//1.2
second_plus = time.seconds;
second_plus++;
console.log(`${time.hours}:${time.minutes}:${second_plus}`);
//1.3
second_minus = time.seconds;
second_minus--;
console.log(`${time.hours}:${time.minutes}:${second_minus}`);

//Task2
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    yearOfManufacture: 2022,
    averegeSpeed: 120,
    Show(){
        console.log(`Manufacturer: ${this.manufacturer}\nMode: ${this.model}\nYear of manufacture: ${this.yearOfManufacture}\nAverege speed: ${this.averegeSpeed}`);
    }
};
car.Show();
