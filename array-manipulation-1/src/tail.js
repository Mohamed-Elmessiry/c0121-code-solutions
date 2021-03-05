/* exported tail */
function tail(array) {
  var nArr = [];
  for (var i = 1; i < array.length; i++) {
    nArr.push(array[i]);
  }
  return nArr;
}
