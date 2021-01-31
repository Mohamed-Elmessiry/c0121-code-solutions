/* exported reverseWord */
function reverseWord(word) {
  var newstring = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newstring += word[i];
  }
  return newstring;
}
