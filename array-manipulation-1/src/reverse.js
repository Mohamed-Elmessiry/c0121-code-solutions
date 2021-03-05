/* exported reverse */
function reverse(array) {
  var nArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    nArray.push(array[i]);
  }
  return nArray;
}
