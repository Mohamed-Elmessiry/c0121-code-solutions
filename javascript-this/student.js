/* exported student */
var student = {
  firstName: 'Mohamed',
  lastName: 'Elmessiry',
  subject: 'JS',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  // student.getIntroduction= student.getIntroduction;
  // var actual= student.getIntroduction()
  // var

  getIntroduction: function () {
    return 'Hello, my name is' + ' ' + this.firstName + ' ' + this.lastName + ' and I am studying' + ' ' + this.subject + '.';
  }

};
