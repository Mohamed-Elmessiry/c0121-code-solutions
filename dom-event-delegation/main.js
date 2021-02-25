function handleClick(event) {
  console.log(event.target);
  console.log(event.target.tagName);
}

var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', handleClick);

// document.querySelector('.task-list').addEventListener('click', function (e) {

//   if (e.target && e.target.nodeName == 'button') {
//     var close = e.target.closest('.task-list-item');
//     console.log(close);

//   }
// });
