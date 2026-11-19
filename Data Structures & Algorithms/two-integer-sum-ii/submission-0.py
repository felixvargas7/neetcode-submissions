""""
Input:
list of numbers

Output:
list of 2 numbers

Algorithm:
Two-pointer - why?
- We have to add two numbers at a time, in order to compare the sum to the target number, and see if they are equal,
- We also need the format to be in a way where the first value is less than the second


[1, 2, 5, 6] target = 11

So with our two pointer, because we need to have our indexes follow the pattern of index1 < index2, our first pointer
has to start at a smaller index, our second at a higher index
Does it matter where as long as this is true? I can start:
[1, -, -, 6]
 ^        ^
For example, but whats the best place to start? And more importantly if we start like this, how do we know which 
pointer to move? Because moving one or the other could result in us skipping the solution if there is 
"""
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        while left < right:
            rightN = numbers[right]
            leftN = numbers[left]

            if leftN + rightN == target:
                return [left + 1, right + 1]

            elif leftN + rightN > target:
                right -= 1

            elif leftN + rightN < target:
                left += 1        

            









        