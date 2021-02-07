/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// the querySelector method of the document object is being called with one argument, the string #todo-form

$todoForm.addEventListener('submit', function (event) {
  // the addEventListener is being called on the $todoForm variable with two arguments, the first is the string submit, and an annonymous function with an event parameter
  event.preventDefault();
  // the preventDefault method is being called on the event object with no arguments
  var todo = {
  // an object being assigned to the todo variable followed by an opening bracelet for an object literal
    todoId: uuid.v4(),
    // the v4 method of the uuid oject is being called with no arguments, and the return of the call is being assigned to the todoId property
    task: $todoForm.elements.task.value,
    // the value property, of the task property, of the elements property, of the $todoForm object is being assigned to the task property
    isCompleted: false
    // the boolean is false is being assgined to the iscomplete property
  };
  // the closing curly brace for the variable todo object notation
  todos.push(todo);
  // the push method of the todos object is being called with one argument todo
  $todoList.append(renderTodo(todo));
  // the append method of the $todoList object is being called with one argument, which is the renderTodo method of the todo object
  $todoForm.reset();
  // the reset method of the $todoForm object is being called with no argument
});
// the closig curly brace for the annonymous fucntion followed by the the closing bracket for the addEventListener method

var $todoList = document.querySelector('#todo-list');
// the query selector method of the document object is being called with one argument, the string #todo-list, and the result of that expression is being assigned to the variable $todoList

$todoList.addEventListener('change', function (event) {
  // the add event listener method is being called on the $todolist object with two argumentsm the first is the string change, while the second argument is an annonymous function, with the event parameter
  var todoId = event.target.getAttribute('id');
  // the get attribute method of the target property of the event object is being called with one argument, the string id and the return is being assigned to the todoId var
  for (var i = 0; i < todos.length; i++) {
    // for loop being declared, with initialization of 0 assigned to variable i, condition the i is smaller than legnth of todos,followed by the update which increments i by one, after each loop iterarion
    if (todos[i].todoId === todoId) {
      // an if statement, with the condition that if todoId propety of the tods[i] object striclty equals todoId followed by an operning curly brace
      todos[i].isCompleted = event.target.checked;
      // the checked property of the target property, of the event object is being assigned to the isCompleted checked property of the todos[i] object
      break;
      // the break method to exit the loop
    }
  }
});

for (var i = 0; i < todos.length; i++) {
// a for loop with initialization that variable i=0, with the condition the i is smaller than the length property of  todos, with the update that increment i by one
  var $todo = renderTodo(todos[i]);
  // the renderTodo method is being called with one argument, which is the todos object at i
  $todoList.appendChild($todo);
  // the appendchild method of the $todoList object is being called with one argument, the $todo vairable
}

function renderTodo(todo) {
  // a function renderTodo is being declared with the argument todo

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  // the create element method is being called on the document object with one argument the string li and the return is being assigned to the $todo var
  $todo.setAttribute('class', 'list-group-item');
  // the set attribute method of the $todo object is being called with two argumemts. the first is the stirng class and the second is the string list-group-item

  var $formCheck = document.createElement('div');
  // the create element method of the document object is being called with one argument, the string div, and the return of the expression is being assinged to the var $formCheck
  $formCheck.setAttribute('class', 'form-check d-flex');
  // the setAttribute method of the $formcheck object is being called with two arguments, the string class and the sting form-checked-flex

  var $checkbox = document.createElement('input');
  // the createelement method of the document object is being called with one argument, the string input and the return of the expression is being assigned to the var $checkbox
  $checkbox.checked = todo.isCompleted;
  // the isComplete property of the todo object is being assigned to the checked property of the $checkbox object
  $checkbox.setAttribute('id', todo.todoId);
  // the set attribute method of the $checkbox object is being called with two arguments, the string id and the todoId property of the todo object
  $checkbox.setAttribute('type', 'checkbox');
  // the set attribute method of the $checkbox object is being called with two arguments, the string type and the string checkbox
  $checkbox.setAttribute('class', 'form-check-input');
  // the set attribute method of the $checkbox object is being called with two arguments, the class string, and the strin 'form-check-input'
  var $label = document.createElement('label');
  // the createelement method of the document object is being called with one argument the string lable and the return of the method is being assigned to the var $label
  $label.setAttribute('for', todo.todoId);
  // the set attribute method of the $label object is being called with two arguments. the for string and the todoId property of the todoobject
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // set attibute method of the $label object is being called with two arguments, the string class and the string form-check-label flex-grow-1 ml-2
  $label.textContent = todo.task;
  // the task property of the todo object is being assigned to the textcontent property of $lable object

  $todo.append($formCheck);
  // the append method of the $todo object is being called with one argument the object $formCheck
  $formCheck.append($checkbox, $label);
  // the append method of the $formCheck object is being called with two arguments the $checkbox object and the $label object

  return $todo;
  // the return method is being called on the $todo object
}
