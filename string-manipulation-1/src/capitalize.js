/* exported capitalize */
// function capitalize(word) {
//   var totalStrin = [];
//   for (var i = 0; i < word.length; i++) {
//     totalStrin.push((word[i].toLowerCase()));
//   }
//   // console.log(totalStrin);
//   return totalStrin.toUpperCase();

// }

function capitalize(word) {
  var k = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      k += word[i].toUpperCase();
    } else {
      k += word[i].toLowerCase();
    }
  }
  return k;

}
