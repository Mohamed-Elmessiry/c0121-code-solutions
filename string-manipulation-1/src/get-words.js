/* exported getWords */
function getWords(string) {
  if (string == '') {
    return [];
  } else {
    return string.split(' ');
  }
}

// array = [];
// for (var i = 0; i < string.length; i++) {
//   if (string[i] !== ' ') {
//     array += string[i];
//   }
// }
// return array;
