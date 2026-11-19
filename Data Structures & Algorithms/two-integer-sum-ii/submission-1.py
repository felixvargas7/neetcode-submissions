"""
Input:
List of integers

Output:
List of 2 integers

Algorithm:
Ok so right off, we know this is a two-pointer solution, but why?
The questions asks us to return a list of TWO numbers, hint no.1
List is sorted in decreasing order, hint no.2
Indeces can't be equal, therefor two difference indexes, hint no.2

ZERO INDEXED -> ONE INDEXED, meaning add one 

def twoSum(numbers):
    output = []
    left = 0
    right = -1
    while left pointer less than right pointer:
        if left pointer value + right pointer value > target:
            move right pointer back one
        if left pointer value + right pointer value < target:
            move left pointer forward one
        if left pointer value + right pointer value == target:
            append index of left + right pointer value

"""
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        output = []
        left = 0
        right = len(numbers) - 1
        
        while left < right:
            leftN = numbers[left]
            rightN = numbers[right]
            if leftN + rightN > target:
                right += -1
            elif leftN + rightN < target:
                left += 1
            else:
                output.extend([left + 1, right + 1])
                return output
