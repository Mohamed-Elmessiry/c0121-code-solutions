function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var clicky = document.querySelector('.click-button');
clicky.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var push = document.querySelector('.hover-button');
push.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
