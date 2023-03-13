// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/* 
  arr of nums, target num, return indices of num that add up to target
  nums = [2,7,11,15], target = 9, Output: [0,1]

  arr of nums - not empty, always nums, whole, positive, atleast two, num + self
  will never equal target (only two nums)
  return indices of nums that match the target --> []

  nums = [2,7,11,15], target = 9, Output: [0,1]
  nums = [1,2,3,4,5], target = 9, Output: [3,4]
  nums = [5,6,9], target = 11, Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // grab a num
  for (let i = 0; i < nums.length; i++) {
    // compare exterbnal num to internal num
    for (let k = 0; k < nums.length; k++) {
      if (nums[i] + nums[k] === target && i !== k) {
          return [i, k]
        }
      }
  }
};

console.log(twoSum([2, 7, 11, 15], 9), '[0, 1]'); 
console.log(twoSum([1, 2, 3, 4, 5], 9), '[3,4]'); 
console.log(twoSum([5,6,9], 11), '[0,1]'); 