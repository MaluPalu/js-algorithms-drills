var Queue = require('./queue');
var seedData = [
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 }
];

function calculateTotal(itemQueue){
var total = 0;
var idx = 1;
var firstItem = itemQueue.dequeue();
while(firstItem) {
  if (idx % 15 === 0) {
    total += (firstItem.price * .7);
  } else if (idx % 3 === 0) {
    total += (firstItem.price * .9);
  } else if (idx % 5 === 0) {
    total += (firstItem.price * .8)
  } else {
    total =+ firstItem.price
  }
  firstItem = itemQueue.dequeue();
  idx++
}
return total;
}

var myQueue = new Queue(seedData);
console.log('Calculating total for\n', myQueue);
console.log('Total is', calculateTotal(myQueue));
