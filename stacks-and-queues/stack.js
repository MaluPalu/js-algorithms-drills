module.exports = class {
  constructor(seedData) {
    this.data = [];
    if (seedData) {
      for (const datum of seedData) {
        this.push(datum);
      }
    }
  }

  push(item) {
    this.data.push(item);
    return this;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data(this.data.length - 1);
  }

  clear() {
    this.data = [];
    return this
  }

  length() {
    this.data.length;
  }
}
