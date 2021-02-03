function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);
}
function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
var username = document.querySelector('#user-name');
var useremail = document.querySelector('#user-email');
var message = document.querySelector('#user-message');
username.addEventListener('focus', handleFocus);
username.addEventListener('blur', handleBlur);
username.addEventListener('input', handleInput);
useremail.addEventListener('focus', handleFocus);
useremail.addEventListener('blur', handleBlur);
useremail.addEventListener('input', handleInput);
message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
