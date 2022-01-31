// Make the Group class from the previous exercise iterable.
// Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members,
// don’t just return the iterator created by calling the Symbol.iterator method on the array.
// That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group.group;
  }

  next() {
    if (this.index < this.group.length) {
      return {
        value: this.group[this.index++],
        done: false,
      };
    } else {
      return {
        done: true,
      };
    }
  }
}

class Group {
  constructor() {
    this.group = [];
  }

  add = (value) => {
    if (!this.group.includes(value)) {
      this.group.push(value);
    }
  };

  delete = (value) => {
    this.group = this.group.filter((item) => item !== value);
  };

  has = (value) => {
    return this.group.includes(value);
  };

  static from = (iterable) => {
    const temp = new Group();

    for (const value of iterable) {
      temp.add(value);
    }

    return temp;
  };

  [Symbol.iterator] = () => new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
