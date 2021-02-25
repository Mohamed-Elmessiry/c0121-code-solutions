/* exported reverse */
function reverse(array) {
  var empty = [];
  for (var i = array.length - 1; i >= 0; i--) {
    empty.push(array[i]);
  }
  return empty;
}
