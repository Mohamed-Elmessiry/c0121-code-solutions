/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var n = [];
  for (let i = 0; i < words.length; i++) {
    n.push(words[i] + suffix);
  }
  return n;
}
