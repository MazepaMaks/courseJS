//Task1
//1.1
const number = +prompt("Enter a number 0-9");
switch (number) {
    case 1: console.log("!");break;
    case 2: console.log("@");break;
    case 3: console.log("#");break;
    case 4: console.log("$");break;
    case 5: console.log("%");break;
    case 6: console.log("^");break;
    case 7: console.log("&");break;
    case 8: console.log("*");break;
    case 9: console.log("(");break;
    
}

//1.2
const Year = +prompt("Enter the year");
if(Number.isInteger(Year/400) && Number.isInteger(Year/4)){//Зробив перевірку на ціле число, якщо число / 400, 4
    console.log(`${Year} is a leap year`);//і в результаті виходить ціле число - рік високосний
}
else{
    console.log(`${Year} isn't a leap year`);
}

//1.3
let day = +prompt("Enter a day");
let month = +prompt("Enter a month");
let year = +prompt("Enter the year");

if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10){
    if(day == 31){
        month++;
        day = 1;
    }
    else{
        day++;
    }
}
if(month == 4 || month == 6 || month == 9 || month == 11){
    if(day == 30){
        month++;
        day = 1;
    }
    else{
        day++;
    }
}
if(month == 2){
    if(Number.isInteger(year/400) && Number.isInteger(year/4)){
        if(day == 28){
            day++;
        }
        if(day == 29){
            month++;
            day = 1;
        }
    }
}
if(month == 12 && day == 31){
    year++;
    month = 1;
    day = 1;
}
console.log(`The next date is ${day} day ${month} month and ${year} year`);