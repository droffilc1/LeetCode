// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//  Integer array nums
//  true if any value appears at least twice in the array, false if every element is distinct
//  convert array into a Set and compare its length with the original number array length


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set([...nums])
  return set.size !== nums.length
};

console.log(containsDuplicate([1, 2, 3, 1]), 'true');
console.log(containsDuplicate([1,2,3,4]), 'false');
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), 'true');