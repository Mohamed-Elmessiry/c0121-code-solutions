var nOne = [2, 4, 8];
var maximumValue = Math.max(...nOne);
console.log('The value of maximumValue is:', maximumValue);
var heroes = ['superman', 'spiderman', 'batman', 'capitan america'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex is:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero is', randomHero);
var libary = [{
  title: 'Medival Europe',
  author: 'Rick Steve'
},
{
  title: 'The Secret',
  author: 'Rohnda Byrne'

}];

var lastBook = libary.pop();
console.log('The value of lastBook', lastBook);
var firstBook = libary.shift();
console.log('The value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

libary.push(js);
libary.unshift(css);
libary.splice(1, 1);
console.log('The value of libary is:', libary);

var fullName = 'Mohamed Elmessiry';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName', sayMyName);
