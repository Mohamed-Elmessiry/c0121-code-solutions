
function handleSubmit() {
  event.preventDefault();
  var elements = {
    name: cForm.elements.name.value,
    email: cForm.elements.email.value,
    message: cForm.elements.message.value
  };
  console.log(elements);
  cForm.reset();
}
var cForm = document.getElementById('contact-form');
cForm.addEventListener('submit', handleSubmit);
