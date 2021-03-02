/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
}
console.log('isUnderFive(4)', isUnderFive(4));

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
}
console.log('isEven(4):', isEven(4));

function startsWithJ(string) {
  if (string.charAt(0) == 'J') {
    return true;
  } else {
    return false;
  }
}

console.log("startsWithJ('Jason')", startsWithJ('Jason'));

var peter = {
  name: 'pete',
  age: 20
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }

}

console.log(peter);
console.log('isOldEnoughToDrink(peter)', isOldEnoughToDrink(peter)
)
;

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrive(peter)', isOldEnoughToDrive(peter))
;

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
function categorizeAcidity(pH) {
  if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('categorizeAcidity(7)', categorizeAcidity(7));
console.log('categorizeAcidity(4)', categorizeAcidity(4));
console.log('categorizeAcidity(15)', categorizeAcidity(15))
;

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return "We're the warner brothers!";
  } else if (name === 'wakko') {
    "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}

console.log("introduceWarnerBro('yakko'):", introduceWarnerBro('yakko'));
console.log("introduceWarnerBro('wakko'):", introduceWarnerBro('wakko'));
console.log("introduceWarnerBro('dot'):", introduceWarnerBro('dot'));
console.log("introduceWarnerBro('cody'):", introduceWarnerBro('cody'));
