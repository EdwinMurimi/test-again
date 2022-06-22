// Variable scope

// let, const, var

// Global scope
// var a = 10;
// let b = 20;
// const c = 30;
// let b = 220;

// functional scope
function test() {
    // var a = 10;
    // let b = 20;
    b = 20;
}

// console.log(a);
// console.log(b);

// block scope
{}

// function a() {
//     let c = 100;
// }

// console.log(c);

// if(100 > 20) {
//  let d = 110;
// }
// console.log(d)



// FUNCTIONS
// const getHypotenuse = (a, b) => {
//     const sq = (a * a) + (b * b);
//     const hypotenuse = Math.sqrt(sq)
//     return hypotenuse;
// }

// ES5
// function getHypotenuse(a, b) {
//     const sq = (a * a) + (b * b);
//     const hypotenuse = Math.sqrt(sq);
//     return hypotenuse;
// }

// console.log(getHypotenuse(3, 4));

// function getName() {
//     return "Apprentice Cloud";
// }

// console.log(getName());

// ES6 or Arrow Functions
// const getHypotenuse = (a, b) => {
//     const sq = (a * a) + (b * b);
//     const hypotenuse = Math.sqrt(sq);
//     return hypotenuse;
// }

// const getName = () => {
//     return "Apprentice Cloud";
// }

// cool things you can do with ES6
// const inAndOut = one => {
//     return one;
// }

// console.log(inAndOut("Apprentice Cloud"));

// const addNumbers = (a, b) => a + b;

// console.log(addNumbers(100, 34));

// const gettingHYP = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(gettingHYP(47, 34));

// vanilla js section


const calculateExponential = () => {
    const base = document.querySelector("#base").value
    const power = document.querySelector("#power").value
    const generatedTag = document.createElement('h3');
    const exp = Math.pow(base, power);
    generatedTag.innerHTML = `<h3>${base} to the power of ${power} is: ${exp}</h3>`;
    document.body.appendChild(generatedTag);
}

console.log(base, power);