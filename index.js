const baseOffset = 1000000000;
const newID = oldID + baseOffset;
const ageIsValid = Number.isInteger(currentAge);

let randomNumber = Math.random() * 20
let randomInteger = Math.floor(randomNumber);
let randomUserID = randomInteger + baseOffset;
