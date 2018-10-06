var Stack = require('./stack');

function parenthesisBattle(parensArr){
  var stack = new Stack();
  for(i = 0; i < parensArr.length; i++) {
    if(parensArr[i] === "(") {
      stack.push(parensArr[i])
    }
    else if(parensArr[i] === ")" && stack.length > 0) {
      stack.pop()
    }
    else {
      console.log("Unmatched")
    }
  }
  if(stack[0] === "(") {
    console.log("(, is the winner!")
  }
  else if(stack[0] === ")") {
    console.log("), is the winner!")
  }
}


sampleRuns = [
    { input: ["(", ")"], expected: 'tie' },
    { input: [")", "("], expected: ')' },
    { input: ["(", "(", ")"], expected:  '(' },
    { input: ["(", ")", ")"], expected: ')' }
];

sampleRuns.forEach(function(run){
  console.log('Battle! ', run.input);
  var actual = parenthesisBattle(run.input);
  console.log('  expected:', run.expected);
  console.log('  actual:', actual);
  if (actual === run.expected){
    console.log('  Yay!');
  } else {
    console.log('  not working yet');
  }
});
