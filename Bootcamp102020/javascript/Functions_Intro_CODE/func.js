we can use this type of code or
let diel1 = Math.floor(Math.random() * 6) + 1;
let diel2 = Math.floor(Math.random() * 6) + 1;
let diel3 = Math.floor(Math.random() * 6) + 1;
let diel4 = Math.floor(Math.random() * 6) + 1;
let diel5 = Math.floor(Math.random() * 6) + 1;
let diel6 = Math.floor(Math.random() * 6) + 1;

use more simple type:
let diel1 = rollDie();
let diel2 = rollDie();
let diel3 = rollDie();
let diel4 = rollDie();
let diel5 = rollDie();
let diel6 = rollDie();


function singSong() {
    console.log("do");
    console.log("re");
    console.log("mi");
}

singSong(.toUpperCase());



singSong();
singSong();
singSong();
singSong();
singSong();
singSong();
singSong();
singSong();
singSong();
singSong();


function greet(firstName) {
    console.log(`Hey there, ${firstName}!`)
}




function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet("Elvis", "Presley");


function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('Sun '.toUpperCase(), 5);


function add(x, y) {
    let sum = x + y;
    return sum;
}



function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}





singSong()
singSong()
singSong()
singSong()
singSong()
singSong()
singSong()
singSong()
singSong()
singSong()
singSong()

