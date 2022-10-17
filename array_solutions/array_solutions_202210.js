// Solution in 12 minutes
// O(n**2) time solution
// O(n) space solution
/*
    @param {number[]} nums
    @return {number[]}
*/
var sortedSquaresNested = function(nums) {
    // First square everything
    for (var i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    };
    console.log(nums);
    // Sort the squares
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i != j) {
                if (nums[i] < nums[j]) {
                    var temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                };
            };
        };
    };
    return nums;
};

// Solution in 16 min
// Counting sort
// O(4n) = O(n) time solution
// O(n) space solution?
var sortedSquares = function(nums) {
    // First square everything and find the maximum
    var max_val = nums[0]**2;
    for (var i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
        if (i != 0 && nums[i] > max_val) {
            max_val = nums[i];
        };
    };
    console.log(nums);
    // Sort the squares with counting sort
    var counts = [];
    for (var i = 0; i <= max_val; i++) {
        counts.push(0);
    };
    for (var i = 0; i < nums.length; i++) {
        counts[nums[i]] += 1;
    };
    nums = [];
    for (var i = 0; i <= max_val; i++) {
        if (counts[i] != 0) {
            nums.push(i);
            counts[i] -= 1;
            if (counts[i] != 0) {
                i -= 1;
            };
        };
    };
    return nums;
};



// Testing area
console.log('#############');
console.log('Array Algorithms');

// Testing sortedSquares
console.log('--------');
var nums1 = [-4,-1,0,3,10];
console.log(`Initial unsquared array = [${nums1}]`);
var squ1 = sortedSquares(nums1);
console.log(`Squared and sorted array = [${squ1}]`);
var nums2 = [-7,-3,2,3,11];
console.log(`Initial unsquared array = [${nums2}]`);
var squ2 = sortedSquares(nums2);
console.log(`Squared and sorted array = [${squ2}]`);
