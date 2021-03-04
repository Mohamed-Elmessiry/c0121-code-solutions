/* exported capitalize */
function capitalize(word) {
  var capital = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capital += word;
    }

  }
  return capital;
}
