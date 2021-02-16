function ExampleConstructor() {
  console.log('proto type of ExampleConstructor', ExampleConstructor.prototype);
  console.log('type of ExampleConstructor protoype', typeof ExampleConstructor.prototype);
}

var nExample = new ExampleConstructor();
console.log('value of nExample', nExample);

var instance = nExample instanceof ExampleConstructor;
console.log(instance);

console.log(instance);
