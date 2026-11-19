/*
What the problem is asking:
Return a boolean depending on if the rule stated happens in the array:
- Any value appears more than once in the array (return true)
- otherwise (return false)

Handwalk:
nums = [1, 2, 3, 5, 8, 6, 1]

[1, 2, 3, 5, 8, 6, 1]
 ^ 
- We start on the first index, and see it is a 1, we want to take a note of this number to
be able to see if later on it repeats, thoughts?
    - We could store in an object

[1, 2, 3, 5, 8, 6, 1]
    ^
- We go to second number and it doesnt equal any previous number, so we continue 
    - HOWEVER we also have to store this number too

[1, 2, 3, 5, 8, 6, 1]
       ^
- Same pattern, hasn't repeated so continue
    - We want to take note of this number as well 

[1, 2, 3, 5, 1, 6, 1]
          ^
- Same pattern, continue
    - Store number

[1, 2, 3, 5, 1, 6, 1]
             ^
= OK first time a number repeats, so we return true and break out of loop

Algo 1:

function (nums) {
    object/arrays for nums checked
        loop through nums array {
            for first num, it cant repeat so automatically store it in object
            for every num after, check to see if it appears in this object/array
                if it does appear in the object/array
                    return true and stop loop
                if it doesnt appear 
                    store in array and contiue loop
        }

}

Data structure:
I'll use a hash map in order to be able to store data (in this case numbers)
    And later be able to look back at these values if they've appeared again in my array which 
    im looping through.




Code: */
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    let storedNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (!storedNums.includes(nums[i])) {
            storedNums.push(nums[i])
            continue;
        }         
        if (storedNums.includes(nums[i])) {
            return true;
        }  
        // if (!storedNums.includes(nums[i]) && nums[i] === nums.length - 1){
        //     return false;
        // }
    }
    return false
    }
}

// const solutions = (nums) => {
//     let storedNums = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (!storedNums.includes(nums[i])) {
//             storedNums.push(nums[i])
//             console.log(storedNums)
//             continue;
//         }         
//         if (storedNums.includes(nums[i])) {
//             return true
            
//         }  
//         else {
//             return false;
//         }
//     }
// }

