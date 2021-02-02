function handleClick(event) {
  console.log('button clicked');
  console.log('event ', event);
  console.log('event.target:', event.target);
}

var clicky = document.querySelector('.click-button');
clicky.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var doubleClicButton = document.querySelector('.double-click-button');

doubleClicButton.addEventListener('dblclick', handleDoubleClick);
