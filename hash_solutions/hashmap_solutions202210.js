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


// Solution in 30 min
// Time Solution = O(3n) = O(n)
// Space Solution = O(n**2)
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var indexes = {};
    for (var i = 0; i < list1.length; i++) {
        var key = list1[i];
        if (indexes[key]) {
            indexes[key]["index_list"].push(i);
            indexes[key]["subtotal"] += i;
        } else {
            indexes[key] = {
                "index_list": [i],
                "subtotal": i
            };
        };
    };
    for (var i = 0; i < list2.length; i++) {
        var key = list2[i];
        if (indexes[key]) {
            indexes[key]["index_list"].push(i);
            indexes[key]["subtotal"] += i;
        };
    };
    var minsum = -1;
    var results = [];
    for (key in indexes) {
        if (indexes[key]["index_list"].length > 1) {
            if (minsum == -1) {
                minsum = indexes[key]["subtotal"];
            };
            if (indexes[key]["subtotal"] == minsum) {
                results.push(key);
            } else if (indexes[key]["subtotal"] < minsum) {
                minsum = indexes[key]["subtotal"];
                results = [key];
            };
        };
    };
    return results;
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

// Testing findRestaurant
console.log('--------');
var listIndexSumTest = function(list1, list2) {
    console.log("List 1:");
    console.log(`[${list1}]`);
    console.log("List 2:");
    console.log(`[${list2}]`);
    var listnew = findRestaurant(list1, list2);
    console.log(`Final list: [${listnew}]`);
};
listIndexSumTest(list1=["Shogun","Tapioca Express","Burger King","KFC"], list2=["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]);
listIndexSumTest(list1=["Shogun","Tapioca Express","Burger King","KFC"], list2=["KFC","Shogun","Burger King"]);
listIndexSumTest(list1=["happy","sad","good"], list2=["sad","happy","good"]);
var doublearr = ["k","KFC"];
listIndexSumTest(doublearr, doublearr);
