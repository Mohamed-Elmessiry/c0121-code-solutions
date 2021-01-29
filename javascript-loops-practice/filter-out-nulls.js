/* exported filterOutNulls */
function filterOutNulls(values) {
  n = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      n.push(values[i]);
    }
  }
  return n;
}
