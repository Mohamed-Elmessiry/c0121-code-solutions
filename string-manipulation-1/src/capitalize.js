/* exported capitalize */

function capitalize(word) {
  var capital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return capital;
}
