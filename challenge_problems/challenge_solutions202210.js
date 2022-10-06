// Needed for middleNode
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


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
        //console.log(`[${fbarr}]`);
    };
    return fbarr;
};


/*
    @param {number} num
    @return {number}
*/
// Solution in 15 min
// O(n) time solution
var numberOfSteps = function(num) {
    let steps = 0;
    while (num > 0) {
        //console.log(`Number is currently = ${num}`);
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num -= 1
        };
        steps++;
    };
    return steps;
};


/*
    @param {ListNode} head
    @return {ListNode}
*/
// Solved in 20 min
// O(2n) = O(n) time solution
var middleNode = function(head) {
    // Finding the length
    if (!head) {
        return null;
    }
    let cur = head;
    let len = 0;
    while (cur) {
        console.log(`cur = ${cur.val}`);
        len++;
        cur = cur.next;
    };
    // Finding the Middle
    cur = head;
    for (var i = 1; i < len/2; i++) {
        cur = cur.next;
    };
    if (len%2 == 0) {
        cur = cur.next;
    };
    return cur;
};


/*
    @param {string} ransomNote
    @param {string} magazine
    @return {boolean}
*/
// Solved in over 30 min - Bad solution
var canConstruct = function(ransomNote, magazine) {
    let note_dict = {};
    let mag_dict = {};
    let note_arr = ransomNote.split("");
    let mag_arr = magazine.split("");
    for (let i = 0; i < note_arr.length; i++) {
        let val = note_arr[i];
        //console.log(`current letter = ${val}`);
        if (!note_dict[val]) {
            note_dict[val] = 1;
        } else {
            note_dict[val] += 1;
        };
    };
    console.log(note_dict);
    for (let i = 0; i < mag_arr.length; i++) {
        let val = mag_arr[i];
        //console.log(`current letter = ${val}`);
        if (!mag_dict[val]) {
            mag_dict[val] = 1;
        } else {
            mag_dict[val] += 1;
        };
    };
    console.log(mag_dict);
    let can = false;
    for (let key in note_dict) {
        if (key in mag_dict) {
            if (note_dict[key] <= mag_dict[key]) {
                can = true;
            } else {
                can = false;
                break;
            };
        };
    };
    return can;
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

// Testing numberOfSteps
console.log('--------');
let num1 = 14;
console.log(`Number of steps it takes for ${num1} to get to 0:`);
let steps1 = numberOfSteps(num1);
console.log(`Answer = ${steps1}`);
let num2 = 8;
console.log(`Number of steps it takes for ${num2} to get to 0:`);
let steps2 = numberOfSteps(num2);
console.log(`Answer = ${steps2}`);
let num3 = 123;
console.log(`Number of steps it takes for ${num3} to get to 0:`);
let steps3 = numberOfSteps(num3);
console.log(`Answer = ${steps3}`);

// Testing middleNode
console.log('--------');
let l1n5 = new ListNode(val=5);
let l1n4 = new ListNode(val=4, next=l1n5);
let l1n3 = new ListNode(val=3, next=l1n4);
let l1n2 = new ListNode(val=2, next=l1n3);
let l1n1 = new ListNode(val=1, next=l1n2);
let middle1 = middleNode(l1n1);
console.log(`Middle node = ${middle1.val}`);
l1n5.next = new ListNode(val=6)
let middle2 = middleNode(l1n1);
console.log(`Middle node = ${middle2.val}`);

// Testing canConstruct
console.log('--------');
let note1 = "a";
let mag1 = "b";
console.log(`Can you find ${note1} in ${mag1}?`);
let ans1 = canConstruct(note1, mag1);
console.log(ans1);
let note2 = "aa";
let mag2 = "ab";
console.log(`Can you find ${note2} in ${mag2}?`);
let ans2 = canConstruct(note2, mag2);
console.log(ans2);
let note3 = "aa";
let mag3 = "aab";
console.log(`Can you find ${note3} in ${mag3}?`);
let ans3 = canConstruct(note3, mag3);
console.log(ans3);
let note4 = "bg";
let mag4 = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
console.log(`Can you find ${note4} in ${mag4}?`);
let ans4 = canConstruct(note4, mag4);
console.log(ans4);
