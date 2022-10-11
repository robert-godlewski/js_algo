// Basic Array Algos

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


// Inserting Array Functions
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
// Constraints: 1 <= nums.length <= 10^4, 0 <= arr[i] <= 9, return nothing!
var duplicateZeros = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            // splice function will add in the 0 in the middle of the list
            arr.splice(i, 0, 0);
            // need to skip one index or it will cause an infinate loop
            i++;
            // need to remove the very last item in the list
            arr.pop();
        }
    }
};

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
/*
First solution - Fail
var merge = function(nums1, m, nums2, n) {
    if (n > 0) {
        var i = 0;
        var i_num_2 = 0;
        while (nums2[nums2.length-1] != 0) {
            console.log(nums1);
            console.log(i);
            if (nums1[i] == 0) {
                nums1[i] = nums2[i_num_2];
                nums2[i_num_2] = 0;
                i_num_2++;
            } else if (nums1[i] > nums2[i_num_2]) {
                var temp = nums1[i];
                nums1[i] = nums2[i_num_2];
                if (temp < nums2[i_num_2+1]) {
                    nums2[i_num_2] = temp;
                } else {
                    nums2[i_num_2] = 0;
                    i_num_2++;
                    nums2.push(temp);
                }
            } else if (i == (m+n)) {
                i = 0;
            }
            i++;
        }
    }
}
*/
/*
Second solution - Fail
var merge = function(nums1, m, nums2, n) {
    var max_len = m+n;
    // Add the 2 arrays together
    // j to iterate through nums2
    var j = 0;
    for (var i = 0; i < max_len; i++) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[j];
            j++;
        }
    }
    console.log(`Recenly merged array: ${nums1}`);
    for (var i = 0; i < max_len; i++) {
        console.log(`Current array: ${nums1}`);
        var check_num = nums1[i];
        for (var j = 0; j < max_len; j++) {
            if (j+1 != max_len) {
                if (check_num > nums1[j] && i < j) {
                    var temp = nums1[j];
                    nums1[j] = check_num;
                    nums1[i] = temp;
                }
            }
        }
    }
}
*/
/*
Third solution - Still wrong for some reason
var merge = function(nums1, m, nums2, n) {
    var max_len = m+n;
    // Add the 2 arrays together
    // j to iterate through nums2
    var j = 0;
    for (var i = 0; i < max_len; i++) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[j];
            j++;
        }
    }
    // using the sort function
    nums1.sort((a,b) => {return a-b;});
}
*/


// This is without using another array to hold extraneous values
// Took over 30 min!
var removeDuplicates = function(nums) {
    // Will skip everything because nums = []
    if (nums.length == 0) {
        return 0;
    }
    // k is used to return
    var k = 1;
    // this compare variable is used to compare to the next
    var compare = nums[0];
    for (var i = 1; i < nums.length; i++) {
        console.log(`nums = [${nums}]`);
        console.log(`k = ${k}`);
        console.log(`nums[${i}] = ${nums[i]}`);
        if (nums[i] != compare) {
            compare = nums[i];
            nums[k] = nums[i];
            k++;
        }
    }
    console.log(nums);
    return k;
};


// Testing Area
console.log('#############');
console.log('Array Algorithms');
// Problem 1
console.log('Finding Maximum Consecutive Ones:');
var nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));
var nums = [1,0,1,1,0,1];
console.log(findMaxConsecutiveOnes(nums));
// Problem 2
console.log('Finding numbers with even digits:');
var nums = [12,345,2,6,7896];
console.log(findNumbers(nums));
var nums = [555,901,482,1771];
console.log(findNumbers(nums));
// Problem 3 - Need to work on
console.log('Sorting squared numbers');
var nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));
var nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));
// Problem 4
console.log('Duplicate Zeros:');
var nums = [1,0,2,3,0,4,5,0];
console.log(duplicateZeros(nums));
var nums = [1,2,3];
console.log(duplicateZeros(nums));
// Problem 5 - Need to work on - Leetcode for some reason will not accept this
/*
console.log('Merge Sorted Array:');
var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];
console.log(`arrays pre merge: [${nums1}] and [${nums2}]`);
nums1 = merge(nums1, 3, nums2, 3);
console.log(`array after merge: ${nums1}`);
var nums = merge([1], 1, [], 0);
console.log(nums);
var nums = merge([0], 0, [1], 1);
console.log(nums);
*/
// Problem 6 - Need to work on
console.log('Remove Duplicates:');
var nums = [1,1,2]
var num = removeDuplicates(nums);
