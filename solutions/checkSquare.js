const comp = (arr1, arr2) =>{
  if(!arr1 || !arr2) return false;
  if(arr1.length !== arr2.length) return false;
  arr1 = arr1.sort((a,b) => b - a).map(n => n*n);
  arr2.sort((a,b) => b - a);
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const { assert } = require('chai');

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
assert.isTrue(comp(a1, a2));
console.log("Test 1 passed");

a1 = [121, 144, 19, 161, 19, 144, 19, 11]; 
a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
assert.isFalse(comp(a1, a2),"Test 2 failed");
console.log("Test 2 passed");

a1 =  [2, 2, 3];
a2 = [4, 9, 9]; 
assert.isFalse(comp(a1, a2),"Test 3 failed");
console.log("Test 3 passed");

a1 = [2, 9, 1, 5, 10, 2, 2, 0, 3, 9, 1, 1, 0, 6, 5, 10, 2, 1, 2, 7, 2, 5, 10, 1];
a2 = [4, 0, 1, 4, 100, 4, 81, 4, 1, 9, 49, 25, 1, 4, 25, 25, 100, 1, 81, 100, 36, 1, 4, 0];
assert.isTrue(comp(a1, a2),"Test 4 failed");
console.log("Test 4 passed");


