//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function countDownLoop(number) {
  for (number; number >= 0; number--) {
    console.log(`loop count down: `, number);
  }
}
const loopTest = countDownLoop(5);

function countDownWhileLoop(number) {
  while (number >= 0) {
    console.log(`While loop count down: `, number);
    number--;
  }
}

const whileLoopTest = countDownWhileLoop(5);
//2. Next, try looping just like above except using recursion
function countDownRecursive(number) {
  if (number === 0) {
    return console.log(`recursive count down: `, number);
  } else {
    console.log(`recursive count down: `, number);
    return countDownRecursive(number - 1);
  }
}

const testRecursion = countDownRecursive(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
