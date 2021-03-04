/* exported countdown */

function countdown(number) {
  debugger;
  var arr = [];
  for (var i = number; i >= 0; i--) {
    arr.push(number--);
  }
  return arr;
}
