/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      return true;
    }
  }
  return false;
}
