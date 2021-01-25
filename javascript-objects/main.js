const student = {
  firstName: 'Mohamed',
  lastName: 'Elmessiry',
  age: 34
};
const fullname = (student.firstName) + ' ' + (student.lastName);
console.log('value of fullname: ' + ' ' + fullname);
(student.livesInIrvine) = false;
(student.previousOccupation) = 'Financial Analyst';
console.log('value of student lives in Irvine:' + ' ' + student.livesInIrvine);
console.log('value of previous occupation:' + ' ' + student.previousOccupation);
console.log(student);

const vehichle = {
  make: 'mercedes',
  model: 'gullwing',
  year: '1957'
};
(vehichle.color) = 'silver';
(vehichle.isConvertible) = false;
console.log('value of vehichle color:' + ' ' + vehichle.color);
console.log('value of vechile is convertible:' + ' ' + vehichle.isConvertible);
console.log(vehichle);

const pet = {
  name: 'felfel',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log(pet);
