
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

// shortcut 
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

//console: myMath.PI , myMath.cube(3) - 27

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: "scottish fold",
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says Meoww`)
    }
}

// //console: cat.meow();

// const meow2 = cat.meow;
// console: meow2() - > says Meoww
// THIS IS: Window -refering to Window not cat object



