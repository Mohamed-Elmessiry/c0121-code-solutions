var slider = document.querySelector('.slide');
var images = ['001.png', '004.png', '007.png', '025.png', '039.png'];
var i = 0;
function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();

}
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}
function setImg() {
  return slider.setAttribute('src', 'images/' + images[i]);
}

function down() {
  var counter = 1;

  var start = setInterval(function () {
    slider.setAttribute('src', 'images/' + images[counter]);
    counter++;
    if (counter >= 5) {
      counter = 1;
      clearInterval(start);
    }

  }, 3000);

}

down();

var bOne = document.querySelector('.cone');
bOne.addEventListener('click', function () {

  slider.setAttribute('src', 'images/' + images[0]);

});

var bTwo = document.querySelector('.ctwo');
bTwo.addEventListener('click', function () {

  slider.setAttribute('src', 'images/' + images[1]);

});

var bThree = document.querySelector('.cthree');
bThree.addEventListener('click', function () {

  slider.setAttribute('src', 'images/' + images[2]);

});

var bFour = document.querySelector('.cfour');
bFour.addEventListener('click', function () {

  slider.setAttribute('src', 'images/' + images[3]);

});

var bFive = document.querySelector('.cfive');
bFive.addEventListener('click', function () {

  slider.setAttribute('src', 'images/' + images[4]);

});
