//First task
const now_year = 2023;
const birth_year = prompt("Enter your birth year");
let age = now_year - birth_year;
alert(`Your age is ${age}`);
//Second task
const radius = prompt("Enter a radius of circle");
let area = 2 * Math.PI * radius;
console.log(`Area of circle with radius ${radius} is ${area}`);
//Third task
const distance = prompt("Enter a distance between Kyiv and Rivne");
const time = prompt("Enter a time you have to reach this distance");
let speed = distance / time;
alert(`Your speed is ${speed}`);
//Fourth task
const dollars = prompt("How much dollars would you convert to euro?");
const euro = 0.93;
let convert = dollars * euro;
alert(`After conver ${dollars} to euro you received a ${convert}`);
//Fifth task
const cpacityGB = prompt("Enter a cpacity of your flash in GB");
const cpacityMB = cpacityGB*1000;
const fileSize = 820;
let files = Math.floor(cpacityMB/fileSize);
alert(`You can saved ${files} files`);

