/*
    @param {number[]} nums
    @return {number[]}
*/
// Solved in 10 min
// O(n) time solution
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
        //console.log(`[${nums}]`);
    };
    return nums;
};


/*
    @param {number[][]} accounts
    @return {number}
*/
// Solved in 15 min
// O(n**2) time solution
var maximumWealth = function(accounts) {
    let maxAccount = 0;
    for (let i = 0; i < accounts.length; i++) {
        let subtotal = 0;
        //console.log(accounts[i]);
        for (let j = 0; j < accounts[i].length; j++) {
            //console.log(accounts[i][j]);
            subtotal += accounts[i][j];
        };
        if (subtotal > maxAccount) {
            maxAccount = subtotal
        };
        //console.log(`Current maximum account ammount = ${maxAccount}`);
    };
    return maxAccount;
};


/*
    @param {number} n
    @return {string[]}
*/
// Solution in 15 min
// O(n) time solution
var fizzBuzz = function(n) {
    let fbarr = [];
    for (let i = 1; i <= n; i++) {
        let temp = "";
        if (i % 3 == 0) {
            temp += "Fizz";
        };
        if (i % 5 == 0) {
            temp += "Buzz";
        };
        if (i % 3 != 0 && i % 5 != 0) {
            temp = i.toString();
        };
        fbarr.push(temp);
        console.log(`[${fbarr}]`);
    };
    return fbarr;
};


// Testing Ground
console.log('#############');
console.log('Challenge Problem Algorithms');

// Testing runningSum
console.log('--------');
let nums1 = [1,2,3,4];
console.log(`list = [${nums1}]`);
let numsum1 = runningSum(nums1);
console.log(`sumed list = [${numsum1}]`);
let nums2 = [1,1,1,1,1];
console.log(`list = [${nums2}]`);
let numsum2 = runningSum(nums2);
console.log(`sumed list = [${numsum2}]`)
let nums3 = [3,1,2,10,1];
console.log(`list = [${nums3}]`);
let numsum3 = runningSum(nums3);
console.log(`sumed list = [${numsum3}]`);

// Testing maximumWealth
console.log('--------');
let accounts1 = [[1,2,3],[3,2,1]];
console.log(`accounts list = [${accounts1}]`);
let maxAccount1 = maximumWealth(accounts1);
console.log(`maximum amount = ${maxAccount1}`);
let accounts2 = [[1,5],[7,3],[3,5]];
console.log(`accounts list = [${accounts2}]`);
let maxAccount2 = maximumWealth(accounts2);
console.log(`maximum amount = ${maxAccount2}`);
let accounts3 = [[2,8,7],[7,1,3],[1,9,5]];
console.log(`accounts list = [${accounts3}]`);
let maxAccount3 = maximumWealth(accounts3);
console.log(`maximum amount = ${maxAccount3}`);

// Testing fizzBuzz
console.log('--------');
console.log('FizzBuzz for 3 times:');
let fb1 = fizzBuzz(3);
console.log(`solution = [${fb1}]`);
console.log('FizzBuzz for 5 times:');
let fb2 = fizzBuzz(5);
console.log(`solution = [${fb2}]`);
console.log('FizzBuzz for 15 times:');
let fb3 = fizzBuzz(15);
console.log(`solution = [${fb3}]`);
