// analagous to the some method, arrays also have an every method
// this one returns true when the given function returns true
// for _every_ element in the array

// implement 'every' as a function that takes an array and a predicate function as parameters
// write two versions, one using a loop and one using the 'some' method

function every_loop(array = [], predicate = () => {}) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (!predicate(array[i])) {
      return false;
    }
  }
  return true;
}

function every_some(array = [], predicate = () => {}) {
  return !array.some((element) => !predicate(element));
}

const array = [1, 2, 3];
const predicate = (element) => element < 0;

console.log(every_loop(array, predicate));
console.log(every_some(array, predicate));
