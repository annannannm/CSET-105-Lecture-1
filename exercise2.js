const prompt = require('prompt-sync')();


// EXERCISE ONE
/*
let hash = "#";
while (hash.length < 8) {
    console.log(hash);
    hash += "#";
}
*/


//EXERCISE 2
/* 
for (let num=1; num< 101; num++) {

 if (num % 3 === 0) {
    console.log("FIZZ")
 }
 else if (num % 5 === 0) {
    console.log("BUZZ")
 }
 else if (num % 3 === 0 && num % 5 === 0) {
    console.log("FIZZBUZZ");
 }
 else {
    console.log(num);
}
}
*/


//EXERCISE 3 
/* let length = Number(prompt("What do you want the grid length to be?")), height = Number(prompt("What do you want the grid height to be?"));
//length is the number of columns
//height is the number of rows
for(rows=1; rows<= height; rows++){
//executes for each row that is desired

    let odd= "", even = ""

    if (rows % 2 === 0) {
        //This builds the even rows
        for(columns=1; columns<=length; columns++){
            if(columns % 2 !== 0) {even = even + " "}

            else {even= even + "#"}
        }
        console.log(even);
    }

    else {
        //build the odd rows
        for(c=1; c<=length; c++){
            if(c % 2 !== 0){odd = odd + "#"}

            else {odd = odd + " "}
        }
        console.log(odd);
    }
}
*/

/*
// EXERCISE 4
for( let c = 1; c<51; c++)
    console.log(c)

for (let d = 1; d<25; d++)
    console.log(d)

for (let e = 1; e<25; e= e + 2)
    console.log(e)

for (let f = 1; f<26; f++)
    if(f % 3 === 0){
        console.log(f)}

for (let g = 5; g<51; g = g + 5)
    console.log(g)

for (let h=1; h<51; h++)
    if ((h % 2 === 0 || h % 3 ===0) &&! (h % 2 === 0 && h % 3 === 0)){
    console.log(h)}

for (let j=1; j<101; j++)
    if ((j % 2 === 0 || j % 3 ===0) &&! (j % 12 === 0)){
         console.log(j)};

*/

// EXERCISE 5
/*
for( let c = 51; c>=1; c--)
    console.log(c)

for (let d = 25; d>=1; d--)
    console.log(d)

for (let e = 25; e>=1; e= e - 2)
    console.log(e)

for (let f = 25; f>=1; f--)
    if(f % 3 === 0){
        console.log(f)}

for (let g = 50; g>=1; g = g - 5)
    console.log(g)

for (let h=50; h>=1; h--)
    if ((h % 2 === 0 || h % 3 ===0) &&! (h % 2 === 0 && h % 3 === 0)){
    console.log(h)}

for (let j=100; j>=1; j--)
    if ((j % 2 === 0 || j % 3 ===0) &&! (j % 12 === 0)){
         console.log(j)};
*/ 

// EXERCISE 6
for (let num = Number(prompt("What number to multiply?")),\]
let ; = 1; xy<=10; xy++){
    
    }\\\\