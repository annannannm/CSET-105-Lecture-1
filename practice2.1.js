const prompt = require('prompt-sync')();

while (true) {
let num1 = (Number(prompt("Enter a number:")));

if (num1 <= 10) {
    console.log("Small number");
}

else if (num1 <= 100) {
    console.log("Medium number");
}

else if (num1 < Infinity) {
    console.log("Large number");
}

else {
    console.log('exit');
    break;
}

}
/* let number = 1;
while (number <= 10) {
    console.log(number);
    //number = number + 1
    //number++;
    //number += 1;
}

for(let num= 1; num <=10; num++){
    console.log(num);
}
*/




