// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Took me 7 min to solve!
var reverseString = function(s) {
    var first = 0;
    var end = s.length-1;
    while (first < end) {
        console.log(s);
        var temp = s[first];
        s[first] = s[end];
        s[end] = temp;
        first++;
        end--;
    }
    console.log(s);
};

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Took about 10 minutes!
var reverse = function(x) {
    var s = x.toString();
    var x_arr = s.split('');
    var first = 0;
    var end = x_arr.length-1;
    while (first < end) {
        console.log(x_arr);
        if (x_arr[first] == '-') {
            first++;
        }
        var temp = x_arr[first];
        x_arr[first] = x_arr[end];
        x_arr[end] = temp;
        first++;
        end--;
    }
    s = x_arr.join("");
    console.log(s);
    var result = parseInt(s, 10);
    if (result < -2147483648 || result >= 2147483648) {
        return 0;
    }
    return result;
};
