var heading = document.querySelector('h1');

function update() {
  var counter = 4;
  var countdown = setInterval(function () {
    if (counter === 0) {
      heading.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(countdown);
    } else {
      heading.textContent = counter;
      counter--;
    }
  }, 2000);

}

update();
