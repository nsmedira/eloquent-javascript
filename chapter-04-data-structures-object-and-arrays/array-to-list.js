// write function arrayToList that builds up a structure
// like the one shown when given [1, 2, 3]

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
}

// console.log(arrayToList([1, 2, 3]));

// also write a listToArray function
// produces an array from a list

function listToArray(list) {
  let array = [];
  while (list?.value != null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

// console.log(
//   listToArray(list)
// );

// add a helper function prepend
// takes an element and a list
// creates a new list that adds the element
// to the front of the input list

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

// console.log(JSON.stringify(prepend(0, list)));

// write function nth
// takes a list and a number
// returns the element at the given position in the list
// 0 refers to first element
// returns undefined if there is no such element

function nth(number, list) {
  while (number > 0) {
    if (list.rest === null) {
      return undefined;
    }
    list = list.rest;
    number--;
  }
  return list.value;
}

// console.log(nth(0, list));

// also write a recursive version of nth

function nth_recursive(number, list) {
  if (list === null) {
    return undefined;
  }
  if (number === 0) {
    return list.value;
  }
  return nth_recursive(number - 1, list.rest);
}

console.log(nth_recursive(0, list));
