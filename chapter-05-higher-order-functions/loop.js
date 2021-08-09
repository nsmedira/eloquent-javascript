// write a higher order function 'loop' that provides something
// like a 'for' loop statement
// it takes a value, a test function, an update function, and a body function
// each iteration, it first runs the test function on the current loop value
// and stops if that returns false
// then it calls the body function, giving it the current value
// finally, it calls the update function to create a new value
// and starts from the beginning
// use a regular loop to do the actual looping

function loop(
  start = null,
  onTest = () => {},
  onUpdate = () => {},
  onBody = () => {}
) {
  for (let value = start; onTest(value); value = onUpdate(value)) {
    onBody(value);
  }
}

loop(
  0,
  (val) => val < 10,
  (val) => val + 1,
  console.log
);
