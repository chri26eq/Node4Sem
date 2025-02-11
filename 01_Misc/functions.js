

console.log(GetRandomInt(0, 10));


function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}




                //                             action is a callback function
                // name: string?               action: function
function genericPerformer(name, action) {
    return action(name);
}

// Lasse coding
const codingAction = (name) => `${name} likes coding`;



console.log(genericPerformer("Lasse", codingAction))
console.log()

// Andreas sleeping
function sleepingAction(name) {
    return `${name} loves sleeping`
}

console.log(genericPerformer("Andreas", sleepingAction))

// tara boxing

console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`));