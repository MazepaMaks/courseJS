//Task1
//1.1
var array = [];
array = [23, 34, 1, 2, 6, 8, 77, 98, 43, 89, 12, 11, 19, 99, 45, 38, 0, 12, 67, 96]
//1.2
for (let i = 0; i<20; i++){
    console.log(`[${i+1}] - ${array[i]}`);
}
//1.3
array.sort((a, b) => a-b);
console.log(array);
//1.4
array.splice(10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
console.log(array)
//1.5
console.log(array.filter((num) => num % 7 == 0));
//1.6
array.splice(0, 3);
console.log(array)
//1.7
let count = 0;
array = [23, 34, 1, 2, 6, 8, 77, 98, 43, 89, 12, 11, 19, 99, 45, 38, 0, 12, 12, 96]
for(let i=0; i<array.length;i++){
    if(array[i] % 2 == 0){
        count++;
    }
}
//1.8*
console.log("Number of even number - " + count);
for(let i=0; i<array.length;i++){
    if(array[i]){
        
    }
}
