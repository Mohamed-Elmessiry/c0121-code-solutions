/* exported capitalize */
function capitalize(word) {
  var totalStrin = [];
  for (var i = 0; i < word.length; i++) {
    totalStrin.push((word[i].toLowerCase()));
  }
  // console.log(totalStrin);
  return totalStrin.toUpperCase();

}
