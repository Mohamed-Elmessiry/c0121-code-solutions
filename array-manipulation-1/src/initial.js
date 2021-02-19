/* exported initial */
function initial(array) {
  var empty = [];
  for (var i = 0; i < array.length - 1; i++) {
    empty.push(array[i]);
  }
  return empty;
}
