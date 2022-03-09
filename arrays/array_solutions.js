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
