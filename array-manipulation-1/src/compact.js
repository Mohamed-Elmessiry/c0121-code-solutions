function compact(array) {
  var n = [];
  for (var i = 0; i <= array.length; i++) {
    if (array[i]) {
      n.push(array[i]);
    }

  }
  return n;
}
