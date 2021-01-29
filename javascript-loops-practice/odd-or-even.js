/* exported oddOrEven */
function oddOrEven(numbers) {
  var n = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      n.push('even');
    } else {
      n.push('odd');
    }
  } return n;
}
