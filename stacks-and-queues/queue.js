module.exports = class {
  constructor(seedData) {
    this.data = [];
    if (seedData) {
      for (const datum of seedData) {
        this.enqueue(datum);
      }
    }
  }

  enqueue(item) {
    this.data.push(item)
  }

  dequeue() {
    this.data.shift()
  }

  peek() {
    this.data[0]
  }

  clear() {
    this.data = [
      return this
    ]
  }
}
