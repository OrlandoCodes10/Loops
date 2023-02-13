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

//Strings & maps are objects behind the scene, the term object is a bit of confusing topic

//Key value pairs not considered iterables

// for (let person in textScores) {
//     console.log(`${person} scored ${textScores[person]}`);
// }

//for in loop will interate an object - it will give us the key

//for of is used all the time

// let input = prompt('what would you like to do?');
// const todos = ['Collect']

//Object.values(testScores) - keys, values and entries

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total/scores.length)