// Solution in 15 min
// O(n**2) time solution
// O(1) space solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumNested = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i != j) {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                };
            };
        };
    };
};

// Solution in 20 min
// Same paramaters as twoSumNested
var twoSum = function(nums, target) {
    var diff_map = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target-nums[i];
        if (diff_map[diff]) {
            diff_map[diff].push(i);
        } else {
            diff_map[diff] = [i];
        };
    };
    //console.log(diff_map);
    for (key in diff_map) {
        if (diff_map[key].length > 1 && parseInt(key)*2 == target) {
            return [diff_map[key][0], diff_map[key][1]];
        };
        if (diff_map[target-parseInt(key)]) {
            return [diff_map[key][0], diff_map[target-parseInt(key)][0]];
        };
    };
};


// Testing Area
console.log('#############');
console.log('Hash Map Algorithms');

// Testing twoSum
console.log('--------');
var twoSumTest = function(nums, target) {
    console.log(`Finding the indexes of 2 numbers that equals ${target} in [${nums}]`);
    var indexes = twoSum(nums, target);
    console.log(`[${indexes}]`);
};
twoSumTest([2,7,11,15], 9);
twoSumTest([3,2,4], 6);
twoSumTest([3,3], 6);
