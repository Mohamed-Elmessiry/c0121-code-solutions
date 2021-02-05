var tabC = document.querySelector('.tab-container');
var tab = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');
tabC.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] == event.target) {
        tab[i].classList.add('active');
      } else {
        tab[i].classList.remove('active');
      }

    }
    var a = event.target.getAttribute('data-view');
    for (var k = 0; k < view.length; k++) {
      if (view[k].getAttribute('data-view') == a) {
        view[k].classList.remove('hidden');
      } else {
        view[k].classList.add('hidden');
      }
    }
  }

});
