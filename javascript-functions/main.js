function addTwoNumbers(x, y) {
  var sum = x + y;
  return sum;
}

var addTwoNumbersResult = addTwoNumbers(2, 3);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertMinutesToSeconds(minutes) {
  var convert = minutes * 60;
  return convert;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(60);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey,' + name;
}

var greetResult = greet('Cody');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(10, 20);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Peter', lastName: 'sellers' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['k', 'f', 's', 't', 'y']);

console.log('getLastElementResult:', getLastElementResult);
