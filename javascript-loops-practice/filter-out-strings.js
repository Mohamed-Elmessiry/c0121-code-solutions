/* exported filterOutStrings */
function filterOutStrings(values) {
  var n = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      n.push(values[i]);
    }
  }
  return n;
}
