//Task2
//1.1
const startNumber = +prompt("Enter a start number");
const endNumber = +prompt("Enter an end number");
let sum = 0;
for(let i=startNumber; i<=endNumber; ++i){
    sum = i + sum;
}
console.log(`Sum = ${sum}`);
//1.2
let number1 = +prompt("Enter a number");
let sizenumber;
for(let i=0; number1>1;i++){
    number1 /= 10;
    sizenumber = i;
    
}
console.log(`${sizenumber+1}`);
//1.3
let positive = 0;
let negative = 0;
let zeroes = 0;
let even = 0;
let odd = 0;
let numbers;
for(let i=0;i<10;i++){
    numbers = +prompt("Enter a number");
    if(numbers>0){
        positive++;
    }
    if(numbers<0){
        negative++;
    }
    if(numbers == 0){
        zeroes++;
    }
    if(numbers % 2 == 0){
        even++;
    }
    if(numbers % 2 !== 0){
        odd++;
    }
}
console.log(`Positive - ${positive}`);
console.log(`Negative - ${negative}`);
console.log(`Zeroes - ${zeroes}`);
console.log(`Even - ${even}`);
console.log(`Odd - ${odd}`);
//1.4
for(let i=1; i<=7;i++){
    //let weekDay = 0;
    //weekDay++;
    switch (i) {
        case 1:alert("Monday. Do you want to see the next day?");break;
        case 2:alert("Tuesday. Do you want to see the next day?");break;
        case 3:alert("Wednesday. Do you want to see the next day?");break;
        case 4:alert("Thursday. Do you want to see the next day?");break;
        case 5:alert("Friday. Do you want to see the next day?");break;
        case 6:alert("Saturday. Do you want to see the next day?");break;
        case 7:alert("Sunday. Do you want to see the next day?");break;
    }
}
