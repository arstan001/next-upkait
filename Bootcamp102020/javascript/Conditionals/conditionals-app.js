let random = Math.random()
if (random < 0.5) {
    console.log("Your number is less than 0.5!")
} else {
    console.log("Your number is greater than 0.5!")
}
console.log(random);




const dayOfWeek = prompt("Enter a day").toLowerCase();

if (dayOfWeek === 'monday') {
    console.log('Ugggg i hate Mondays!')
}
else if (dayOfWeek === 'saturday') {
    console.log("Yay I love Saturdays!")
}
else if (dayOfWeek === 'friday') {
    console.log("Friday are decent, especially after work!")
}
// } else if (dayOfWeek === 'Tuesday') {
//     console.log("MEH")
// } else if (dayOfWeek === 'Wednesday') {
//     console.log("MEH")
// } else if (dayOfWeek === 'Thursday') {
//     console.log("MEH")
// } else if (dayOfWeek === 'Sunday') {
//     console.log("MEH")
// }
else {
    console.log("MEH")
}


0 - 5 FREE
5 - 10 Child $10
10 - 65 Adult $20
65 + Senior $10

const age = prompt("Enter your age");

if (age < 5) {
    console.log("You are a baby. You get in for free!")
} else if (age < 10) {
    console.log("You are a child. You pay $10")
} else if (age < 65) {
    console.log("You are and adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}

if

if 
else

        if
else if

if
else if
else if
else



                const password = prompt("please enter a new password");


// Password must be 6+characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces!")
    }

} else {
    console.log("Password too short! Must be 6+ characters.")
}

const userInput = prompt("Enter smth");

if (userInput) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}


// if ('') {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }

if (345) {
    // if (null)
    // if (undefined)
    console.log("Truthy")
} else {
    console.log("Falsy")
}

