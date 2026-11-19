class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            } 
        }

    }
}
/*
P:
Array nums
Integer target

Return indices of two numbers that those two numebrs equal the target, and each index has to be different, can't use same index

E:
nums = [3, 4, 5, 6]     target = 7

3 + 4 = 7, we return their position 0, 1 in array format

nums = [4, 5, 6]        target = 10

hash = {
    4: 1,
    5: 1,
    6: 1
}

4 + 5 first, = 9, target is not 9, and we know target is greater than  the sum, so we know we need to change either i or j


nums = [2, 3, 5, 6, 8, 9, 19] target = 13
        ^
    left = 2                   
                right = 19 ^

Ok left + right = 2 + 19 which result 21 is greater than target, therefore we know we need a small
D: 
We need to loop through the array, however we have two separate points so two pointer
OK new point, array is not stated as sorted, therefore we must uses another data structure, perhaps a hash map?
My logic is we create a hash map to find each number


A:
function(nums, target) {

    right point = 0 
    left point = 
    while loop, condition of while sum is != target ?

}


*/

