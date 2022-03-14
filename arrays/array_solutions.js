// Searching Funtions
var findMaxConsecutiveOnes = function(nums) {
    let max_count = 0;
    let count = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == 1) {
            count++;
        } else if (nums[i] === 0) {
            count = 0;
        }
        if (max_count < count) {
            max_count = count;
        }
        i++;
    }
    return max_count
};

var findNumbers = function(nums) {
    let even_lengths = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i].toString().length % 2 === 0) {
            even_lengths++;
        }
        i++;
    }
    return even_lengths
};

var sortedSquares = function(nums) {
    let i = 0;
    while (i < nums.length) {
        nums[i] = nums[i]**2;
        i++;
    }
    nums.sort(function(a,b){return a-b});
    return nums;
};

// Inserting Functions
var duplicateZeros = function(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log("i = " + i);
        console.log("arr[i] = " + arr[i]);
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
        i++;
        console.log("arr = " + arr);
    }
};

//Need to fix
var merge = function(nums1, m, nums2, n) {
    const max_len = m+n;
    let i = max_len;
    while (i > 0) {
        if (nums1[i] == 0) {
            nums1.pop();
        } else {
            break;
        }
        i--;
    }
    nums1.push(nums2)
    nums1.sort(function(a,b){return a-b})
};
