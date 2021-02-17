var heading = document.querySelector('h1');

function update() {
  var counter = 4;
  var countdown = setInterval(function () {
    heading.textContent = counter;
    counter--;
    if (counter === 0) {
      heading.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(countdown);
    }
  }, 2000);

}

update();
