/* exported getStudentNames */
function getStudentNames(students) {
  var n = [];
  for (let i = 0; i < students.length; i++) {
    n.push(students[i].name);
  }
  return n;
}
