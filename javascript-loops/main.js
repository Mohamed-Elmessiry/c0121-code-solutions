/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (var i = 0; i < 10; i++) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbers4,ToTen', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];

  for (var i = 2; i <= 20; i += 2) {
    evenNumbers.push(i);

  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {

  var repeated = '';
  for (var i = 1; i <= times; i++) {
    repeated += word;

  }
  return repeated;
}

console.log("repeatWord('js', 4)", repeatWord('js', 4));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log("logEachCharacter('code')", logEachCharacter('code'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll([4, 6, 8]):', doubleAll([4, 6, 8]));

var k = { a: 1, b: 2, c: 3 };

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}
console.log('value of k:', k);
console.log('getKeys(k)', getKeys(k));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues(k):', getValues(k));
