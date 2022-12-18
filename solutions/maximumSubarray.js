/**
The maximum sum subarray problem consists in finding the maximum sum of a 
contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum 
sum is the sum of the whole array. If the list is made up of only negative 
numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list 
or array is also a valid sublist/subarray.

*/

// Solution

const maxSequence = function(arr){
    if(arr.length === 0) return 0;
    if(Math.max(...arr) <= 0) return 0;
    if(Math.min(...arr) >= 0) return arr.reduce((a,b) => a + b, 0);
    if(arr.length === 1) return arr[0];
    let maxSum = 0, sum = 0;
    let subArray = [];
    for(let i=0; i< arr.length; i++) {
      for(let j=1; j <= arr.length; j++) {
        subArray = arr.slice(i,j);
        sum = subArray.reduce((a,b) => a+b,0);
        if(subArray && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
    return maxSum;
  }

  // Tests
  const { assert } = require ('chai');

  assert.strictEqual(maxSequence([]), 0);
  assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  assert.strictEqual(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]),155);
  assert.strictEqual(maxSequence([7,4,11,39,36,10,37,44,43,43]),274);
  assert.strictEqual(maxSequence([-2, -3, -1, -5]), 0);
  
  console.log("All tests passed...");
  