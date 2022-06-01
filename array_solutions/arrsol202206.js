// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Constraints: 1 <= nums.length <= 10^5 and nums[i] = 0 or 1
// Solved under 4 min!
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var current_max = 0;
    // For loop is better due to using less memory than the while loop and we know when the ending is with nums.length
    var i = 0;
    while (i < nums.length) {
        if (nums[i] == 1) {
            current_max++;
        } else {
            current_max = 0;
        }
        if (current_max > max) {
            max = current_max;
        }
        i++;
    }
    return max;
};

// Given an array nums of integers, return how many of them contain an even number of digits.
// Constraints: 1 <= nums.length <= 10^5 and 1 <= nums[i] <= 10^5
// Solved in 8 min!
var findNumbers = function(nums) {
    var even_nums = 0;
    for (var i = 0; i < nums.length; i++) {
        // Convert to a string
        var num_string = nums[i].toString();
        // If the length of the string is an even number increment the even_nums value
        if (num_string.length % 2 == 0) {
            even_nums++;
        }
    }
    return even_nums;
};

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Constraints: 1 <= nums.length <= 10^4, -10^4 <= nums[i] <= 10^4, and nums is sorted in non-decreasing order
// Took over 30 min! - Need to learn the sort function
var sortedSquares = function(nums) {
    // Squaring
    for (var i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    return nums.sort((a,b) => {
        // a-b is ascending order
        // b-a is descending order
        return a-b;
    });
};
