/* exported compact */
function compact(array) {
  var nArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      nArr.push(array[i]);
    }
  }
  return nArr;
}
