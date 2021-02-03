var isOn = false;
var container = document.querySelector('.container');
var circle = document.querySelector('.circle');
circle.addEventListener('click', function () {

  if (isOn === false) {
    circle.className = 'circle on';
    container.className = 'container on';
    isOn = true;
  } else if (isOn === true) {
    isOn = false;
    circle.className = 'circle';
    container.className = 'container';
  }

});
