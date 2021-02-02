var nclicks = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
hotButton.addEventListener('click', function (event) {
  nclicks++;
  clickCount.textContent = nclicks;
  var temp;
  if (nclicks < 4) {
    temp = 'cold';
  } else if (nclicks < 7) {
    temp = 'cool';
  } else if (nclicks < 10) {
    temp = 'tepid';
  } else if (nclicks < 13) {
    temp = 'warm';
  } else if (nclicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temp;

});
