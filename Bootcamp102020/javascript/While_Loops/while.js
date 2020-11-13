
// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }


// const SECRET = "BabyHippo";
// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...")
// }
// console.log("Congrats you got the SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }


// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new quess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }
// if (guess === 'q') {
//     console.log("OK YOU QUIT")
// } else {
//     console.log("Congrats You Win")
// }
// console.log(`You got it! IT took you ${attempts} guesses `)


// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits}`)
// }

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }


// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }


// for (let char of "hello") {
//     console.log(char)
// }


// ITERATING EX //

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// let total = 0;
// for (let score of Object.values(testScores)) {
//     total += score;
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)
