/* exported todos */

var todos = [];
// an empty array being assigned to the vairables todos
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// the get item method of the local storage object is being called with one argument(the string javascript-local-storage) and the return of that expression is being assinged to the var previousTodosJSON
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
// an if statement with a condition that the var previousTodosJson strictly not equals null with an opening curly brace of the code block, within the opening curly brace, the parse method of the JSON object being called with one argument (previoustodosJson) and the return is being assigned to the var todos
window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});

// an event listener method being called on the window obect with two arguments, the first is a string of beforeunload, while the second is an annonymous function , with a parameter event, within the function block, the strignify method of the JSON object is being called with one argument todos and the return of the expression is being assigned to the variable todosJson. Afterwards the set item method of the local storage object is being called with two arguments. The first is the string javascript local storage and the second is todosJson variable, followed by closing curly brace for the function, followed by the closing bracket for the addeventlistener
