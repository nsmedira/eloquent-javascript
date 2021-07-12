// write function arrayToList that builds up a structure
// like the one shown when given [1, 2, 3]

function arrayToList(arr) {
  // const list = {}
  // for (let i = 0; i< arr.length ; i++){
  //     list.value = arr[i]
  //     list.rest
  // }

  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
}

// console.log(arrayToList([1, 2, 3]));

// also write a listToArray function
// produces an array from a list

// add a helper function prepend
// takes an element and a list
// creates a new list that adds the element
// to the front of the input list

// write function nth
// takes a list and a number
// returns the element at the given position in the list
// 0 refers to first element
// returns undefined if there is no such element

// also write a recursive version of nth
