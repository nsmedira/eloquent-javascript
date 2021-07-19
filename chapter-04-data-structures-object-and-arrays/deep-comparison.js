// the == operator compares object by identity
// sometimes you'd prefer to compare the values of their properties

// write a function deepEqual
// takes two values
// returns true only if they are the same value or are objects with the same properties
// where the values of the properties are equal when compared with a recursive call to deepEqual

// to find out whether values should be compared directly (=== operator)
// or have their properties compared, you can use the typeof operator
// if it produces "object" for both values, you should do a deep comparison
// NOTE: typeof null produces "object"

// the Object.keys function will be useful

function deepEqual(val0, val1) {
  if (val0 === val1) {
    return true;
  }

  // even if val0 and val1 are not equal, they may be equivalent objects

  if (typeof val0 !== typeof val1) {
    return false; // if types are not equal, values cannot be equal
  }

  if (typeof val0 === "object" && ![val0, val1].includes(null)) {
    // types are equal, types are "object" and neither value is null
    // compare object properties

    obj0 = Object.keys(val0).sort();
    obj1 = Object.keys(val1).sort();
    return !obj0.find((prop0, idx) => {
      // find the first evidence of inequality
      // if we find evidence of inequality, obj0.find will return prop0
      // if we don't find evidence of inequality, we will return undefined
      // negate the result
      // (i.e. obj0.find === undefined means return true)
      // (i.e. obj0.find !== undefined means return false )

      const prop1 = obj1[idx];
      if (prop0 === prop1) {
        // property names are the same
        // test values

        // if they are equal, return false
        // we want to continue the find loop until we find evidence of inequality
        return !deepEqual(val0[prop0], val1[prop1]);
      }

      // if props are not equal, we've found evidence of inequality
      return true;
    });
  }

  return false;
}

// TEST 0
// RESULT: true
// const testObj0 = { sameProp: "sameValue" };
// const testObj1 = { sameProp: "sameValue" };

// TEST 1
// RESULT: false
// const testObj0 = { sameProp: "differentValue" };
// const testObj1 = { sameProp: "sameValue" };

// TEST 2
// RESULT: false
// const testObj0 = { differentProp: "sameValue" };
// const testObj1 = { sameProp: "sameValue" };

// TEST 3
// RESULT: false
// const testObj0 = null;
// const testObj1 = { sameProp: "sameValue" };

// TEST 4
// RESULT: true
// const testObj0 = null;
// const testObj1 = null;

// TEST 5
// RESULT: false
// const testObj0 = 1;
// const testObj1 = 2;

// TEST 6
// RESULT: true
// const testObj0 = { 0: "0th element", 1: "1th element" };
// const testObj1 = ["0th element", "1th element"];

// TEST 7
// RESULT: true
// const testObj0 = { value: 0, rest: { value: 1, rest: null } };
// const testObj1 = { value: 0, rest: { value: 1, rest: null } };

// TEST 8
// RESULT: false
const testObj0 = {
  value: 0,
  rest: { value: 1, rest: { value: 2, rest: null } },
};
const testObj1 = { value: 0, rest: { value: 1, rest: null } };

console.log(deepEqual(testObj0, testObj1));
