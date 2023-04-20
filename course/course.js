// var, const and let declarations

let age = 30;
age = 31;

const birthdate = 1911;
// const cannoot be empty variables
// cosnt job; is not allowed

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah / 10 ** 3);
// console.log(ageJonas > ageSarah)

//operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2 
console.log(ageJonas, ageSarah, averageAge)

////////////////////////////////
//Coding Challenge #1

//1
const markWeight = 78 
const markHeight = 1.69 
const johnWeight = 92
const johnHeight = 1.95 

//2
const markBMI = markWeight / markHeight ** 2
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2 
console.log(johnBMI)

//3
const markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI)



