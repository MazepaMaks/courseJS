//Task 1 - доробить
class CssClass{
    name;
    styles = [];
    Set_style(value_style = []){
        for(let i = 0;i < 3; i++){

            value_style[i] = prompt("Enter a style");
            this.styles[i] = value_style[i];
        }
    }
    Remove_style(){
        console.log(this.styles.shift());
        
    }
    getCSS(){
        for(let i = 0;i < 10; i++){
            console.log(this.styles[i]);
        }
    }

}
let style1 = new CssClass();
style1.name = '.wrapper';
style1.Set_style();
style1.getCSS();
//Task 2

class Button{
    width;
    height;
    text;
    showBtn(){
        document.write(`<button>${this.text}</button>`)
    }
}
let firstButton = new Button();
firstButton.text = 'Butttttton';
firstButton.showBtn();

class BootStrapButton extends Button{
    color;
    showBtn(){
        document.write(`<button style="color: ${this.color};width: ${this.width + "px"};height: ${this.height + "px"};">${this.text}</button>`)
    }
}

let buttonStyle = new BootStrapButton();
buttonStyle.width = 100;
buttonStyle.height = 100;
buttonStyle.text = 'Style button';
buttonStyle.color = 'red';
buttonStyle.showBtn();

//Task 3
const date = new Date('April 17, 2024');
const today_date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
class Dates{//Тут трохи не зрозумів як зробити клас Date, тому що вже є модуль Date
    day;
    month;
    year;
}

class ExtendDate extends Dates{
    ShowDate(){
        console.log(this.day)
        switch (this.month) {
            case 0: console.log(this.day, monthNames[0]);break;
            case 1: console.log(this.day, monthNames[1]);break;
            case 2: console.log(this.day, monthNames[2]);break;
            case 3: console.log(this.day, monthNames[3]);break;
            case 4: console.log(this.day, monthNames[4]);break;
            case 5: console.log(this.day, monthNames[5]);break;
            case 6: console.log(this.day, monthNames[6]);break;
            case 7: console.log(this.day, monthNames[7]);break;
            case 8: console.log(this.day, monthNames[8]);break;
            case 9: console.log(this.day, monthNames[9]);break;
        }
    }
    WhatDate(){
        if(this.day == today_date.getDate()+1){
            console.log(true);
        }
        else if(this.day == today_date.getDate()-1){
            console.log(false);
        }
    }
    LeapYear(){
        if(Number.isInteger(date.getFullYear()/400) && Number.isInteger(date.getFullYear()/4)){//Не ділить на число, бо мабуть year is not integer 
            console.log("Leap year");
        }
        else{
            console.log("No leap year");
        }
    }
    NextDate(){
        console.log(this.day+1);
    }
}
let today = new ExtendDate();
today.day = date.getDate();
today.month = date.getMonth();
today.ShowDate();
today.WhatDate();
today.LeapYear();
today.NextDate();