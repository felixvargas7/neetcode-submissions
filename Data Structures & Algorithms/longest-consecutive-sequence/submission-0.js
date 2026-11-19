/*
P:
Given an array nums, find the length of a the longest consecutive elements,
that is, elemetns that strictly increase by 1. HOWEVER, we are merely going through the array and finding consecutive elements that DO NOT have to be next to each other


E:
nums = [2, 20, 4, 10, 3, 4, 5]

key logic
sequence has to be where the current index is less than the index of the next value AND the value has to be == the current element + 1

once these conditions are met, we increment by 1 to maxLength, 

pretty sure we also have to comapare the highest length to the current length of the "sequence" we are currently handling, assigning the max to maxLength

Hash map holding each number and it's position as the value?

counts = {
2: 0,
20: 1,
4: 2,
10: 3,
3: 4,
4: 5,
5: 6
}

We want to use a two pointer, because we will be moving through a sequence and we need to track the beginning and end of the sequence

The right pointer will move on each iteration or a loop, though it will move through the array based on our condition of where a 

We want a variable to hold the historic length
Ok so we start with the first element 


2, 
what we want to do is go through the array, and find the 

previous attempt:
        const numberSequence = {};
        let start = 0
        for (let i = 0; i < nums.length; i++) {
            if (numberSequence[nums[i]] >= 0 && start <= numberSequence[nums[i]]) {
                start = numberSequence[nums[i]] + 1;
            }
            numberSequence[nums[i]] = i;
            console.log(numberSequence)
        }   
        for (const numbers in numberSequence) {
            console.log(numbers)
        }
    }

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    //  create set, which removes duplicates
        const numsSet = new Set(nums);
    //  variable to hold max length of sequence
        let maxLength = 0;
    //  looping through nums array
        for (let i = 0; i < nums.length; i++) {
        //  checking if within our set, the immediate left neighbor exists in our set
        //  to start our streak on, if not:
            if (!numsSet.has(nums[i] - 1)) {
            //  declare the length of the streak
                let length = 0;
            //  while loop with condition of the set having the sum of the current
            //  number and the length
                while (numsSet.has(nums[i] + length)) {
                // incrementing thelength of the streak
                    length++;
                // comparing the length we made to the historical max length, 
                // reassigning maxLength to equal that value
                maxLength = Math.max(length, maxLength)
                }
            }
        }
        // return the max length after finished iterating through entire string
        return maxLength
}
}
