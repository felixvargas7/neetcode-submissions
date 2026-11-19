/*
get rid of whitespace/punctation
pointer, with while loop to control both loops

Input: s = "Was it a car or a cat I saw?"

Output: true

"Was it a car or cat I saw?"
               ^                     
              ^
l < r

Algorithm:

function (string)
    remove whitespaces/punctation
    I want two variables, one for first index in string, one for last value in string
    Create a while loop, condition of while first index < last index
        Check for actual value of each index
            if same, keep looping
            if not, return false


    return true
*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let l = 0 
        let r = newS.length - 1
        while (l < r) {
            if(newS[l] === newS[r]) {
            //  w      ===      w
                l++
                r--
            } else {
                return false;
            }
        }
        return true;
    }
}
