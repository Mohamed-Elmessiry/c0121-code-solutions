var books = [
  {
    isbn: 'twenty',
    title: 'Big',
    author: 'James'
  },
  {
    isbn: 'one hundred',
    title: 'oliver twist',
    author: 'charles dickens'
  },
  {
    isbn: 'fifteen',
    title: 'tale of two cities',
    author: 'sheakspeare'
  }];

console.log('The Books variable:', books);
console.log('Type of Books:', typeof books);
console.log(JSON.stringify(books));

var s = '{ "Student": "Leo", "Number id": "107", "String name": "string" }';

console.log(s);
console.log('Type of  s:', typeof s);

var k = JSON.parse(s);
console.log('value of k:', k);
console.log('type of k:', typeof k);
