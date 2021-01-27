const num = [10, 20, 30];
const maximumValue = Math.max(...num);
console.log('Maximum value' + ' ' + maximumValue);
const heroes = ['superman', 'batman', 'robocop', 'spiderman'];
var randomNumber = Math.random();
var randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ' + ' ' + randomIndex);
const randomHero = heroes[randomIndex];
console.log('Randomhero:' + ' ' + randomHero);
const libary = [
  {
    title: 'The Secret',
    author: 'Rohnda Byrne'
  },
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens'
  },
  {
    title: 'Romeo and Juliet',
    author: 'Sheakspeare'
  }

];
const lastBook = libary.pop();
console.log('lastbook:', lastBook);
const firstBook = libary.shift();
console.log('firstbook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
libary.push(js);
libary.unshift(css);
libary.splice(1, 1);
console.log(libary);

const fullName = 'Mohamed Elmessiry';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
