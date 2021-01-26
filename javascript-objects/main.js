const student = {
  firstName: 'Mohamed',
  lastName: 'Elmessiry',
  age: 34
};
const fullname = student.firstName + ' ' + student.lastName;
console.log('value of fullname: ' + ' ' + fullname);
student.livesInIrvine = false;
student.previousOccupation = 'Financial Analyst';
console.log('value of student lives in Irvine:' + ' ' + student.livesInIrvine);
console.log('value of previous occupation:' + ' ' + student.previousOccupation);
console.log(student);

const vehicle = {
  make: 'mercedes',
  model: 'gullwing',
  year: '1957'
};
vehicle.color = 'silver';
vehicle.isConvertible = false;
console.log('value of vehichle color:' + ' ' + vehicle.color);
console.log('value of vechile is convertible:' + ' ' + vehicle.isConvertible);
console.log(vehicle);

const pet = {
  name: 'felfel',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log(pet);
