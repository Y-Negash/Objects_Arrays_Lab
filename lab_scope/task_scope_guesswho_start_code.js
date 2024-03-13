// // GUESS 1 ///////////////////
// let guess = {
//   hair_colour: "red",
//   eye_colour: "blue",
//   hat: false,
//   glasses: true,
//   firstName: "Joseph",
// };

// const guessWho = function () {
//   return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// // Prediction: 
// It will be: Guess who is Joseph
// // GUESS 2 ///////////////////

// let firstName = "Donna";

// const guessWho = function () {
//   const glasses = false;
//   let firstName = "Liz";
//   return `Guess Who is ${firstName}.`;
// };

// const guess1 = guessWho();
// console.log("guess1: ", guess1);

// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);

/* Prediction: 
 It will be: Guess Who is Liz 

 Actual: Guess who is Liz (then) Guess who is Donna 
 because Donna is global variable and is in the scope for guess2
*/

// // GUESS 3 ///////////////////

// const guess = {
//   hair_colour: "black",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Andy",
// };

// const changeHat = function () {
//   guess.hat = !guess.hat;
// };

// const changeGuess = function (newName) {
//   guess.firstName = newName;
// };

// const guessWho = function () {
//   return `Guess Who is ${guess.firstName}`;
// };

// changeHat();

// if (guess.hat) {
//   changeGuess("Chris");
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);

/* Prediction: 
 It will be: Guess Who is Chris
 because the changeHat function changes hat from false to true and is used in line 63,
 so in the if statement the condition is true and so the name changes to Chris. 

 Actual: Guess who is Chris
*/

// // GUESS 4 ///////////////////

let firstName = "Gail";

if (firstName === "Gail") {
  let firstName = "Ashley";
}

const guessWho = function () {
  return `Guess Who is ${firstName}`;
};

const finalAnswer = guessWho();
console.log(finalAnswer);

/* Prediction: 
 It will be: Guess Who is Ashley
because firstname uses let so can change later. if statement is true so firstname is changed to ashley which is also uses let.

 Actual: Guess who is Gail
 because firstname changes to Ashley within the scope of the if statement but uses the global variable outside of it.
*/

// // GUESS 5 ///////////////////

// const guess = {
//   hair_colour: "blonde",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Jennifer",
// };

// const changeGuess = function () {
//   guess = {
//     hair_colour: "blonde",
//     eye_colour: "blue",
//     hat: false,
//     glasses: false,
//     firstName: "Kyle",
//   };
// };

// changeGuess();
// console.log(`Guess Who is ${guess.firstName}`);
