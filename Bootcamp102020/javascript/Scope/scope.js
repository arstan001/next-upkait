// ==============
// FUNCTION SCOPE
// ==============

let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch();


// ==============
// BLOCK SCOPE
// ==============

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIIII!'
}
console.log(radius);
console.log(msg);

for (let i = 0; i < 5; i++) {
    let msg = "ASKLDFLDJFSLKF"
    console.log(msg);
}
console.log(msg); // not defined
console.log(i); // not defined


// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"]
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us,${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}



