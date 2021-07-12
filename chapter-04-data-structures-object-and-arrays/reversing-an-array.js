// write function reverseArray
// takes an array as argument
// returns a new array that has the same elements in the inverse order
// cannot use reverse method
function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let test = ["one", "two", "three"];

// write function reverseArrayInPlace
// modify the array given as argument in place
// cannot use reverse method
function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
}

// console.log(reverseArray(["one", "two", "three"]));
reverseArrayInPlace(test);
console.log("test:", test);
