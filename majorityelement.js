// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

//     Example 1:
// Input: nums = [3, 2, 3]
// Output: 3

// Example 2:
// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2
//--------------------------------------------------------------------------//


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0;
    if (nums.length == 1) {
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            count = 0;
        } else {
            count++;
        }
        if (count >= (nums.length/2)) {
            return nums[i];
        }
        System.out.print(nums[i] + " ");
    }
    return 0;
};

console.log(majorityElement = [1,2,1,1,1,3,1])