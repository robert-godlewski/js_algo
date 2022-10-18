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


// Solved in over 30 min, Ended up looking up solution
// Best case: O(1) time and space solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // Base Case, They are not isomorphic if the 2 strings are not the same length
    if (s.length != t.length) {
        return false;
    };
    // Create 2 hash maps for s to t and t to s
    var s_t_map = {};
    var t_s_map = {};
    // Looping through each index of both strings
    for (var i = 0; i < s.length; i++) {
        //console.log(i);
        //console.log(s[i]);
        //console.log(t[i]);
        // Comparing the hash maps at the letter of both strings
        if (!s_t_map[s[i]] && !t_s_map[t[i]]) {
            // Adds in if each letter is not in the hashes.
            s_t_map[s[i]] = {
                "corres": t[i],
                "indexes": [i]
            };
            t_s_map[t[i]] = {
                "corres": s[i],
                "indexes": [i]
            };
        } else if (s_t_map[s[i]] && t_s_map[t[i]]) {
            // Updates the list of indexes that each one maps to only if the corres(ponding) is equal to eachother
            if (s_t_map[s[i]]["corres"] === t[i] && t_s_map[t[i]]["corres"] === s[i]) {
                s_t_map[s[i]]["indexes"].push(i);
                t_s_map[t[i]]["indexes"].push(i);
            } else {
                return false;
            }
        } else {
            return false;
        };
    };
    return true;
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

// Testing isIsomorphic
console.log('--------');
var isomorphicTest = function(s, t) {
    console.log(`Is ${s} and ${t} isomorphic?`);
    var isobool = isIsomorphic(s, t);
    console.log(isobool);
};
isomorphicTest("egg", "add");
isomorphicTest("foo", "bar");
isomorphicTest("paper", "title");
