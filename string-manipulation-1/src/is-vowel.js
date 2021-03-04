/* exported isVowel */
function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < char.length; i++) {
    if (char[i] === vowel[i]) {
      return true;
    }
  }
  return false;
}
