/*
What the problem is asking for:
Given 2 strings, we have to see if both strings contain the same letters, despite their 
format

Handwalk:
Input: s = "racecar", t = "carrace"

Ok so we have two strings, we need to check to see if all of the strings in the each string
are the same characters, as thats what qualifies the strings as anagrams of each other

s = "racecar"
t = "carrace"

To do this, we can sort the string, and then compare their values when we loop through both

sSorted = "aaccerr"
tSorted = "aaccerr"

They are the same, therefore they are anagrams of each other and we return true
If they weren't the same, we'd return false

Pseudocode:

function strings (s, t) {
    create sorted s
    created sorted t

    loop through both,
        if we find a difference at any point, return false
        if they both finish looping and return true

}

function strings (s, t) {
    create sorted s
    create sorted t

    JUST CHECK if they are the same now that they are sorted
        if yes, return true
        if no, return false

}

Data Structure: 
I think we don't really need much data structures, a sorted string to make comparisons 
easier, that way when i find an error i wont have to check other strings before, only the ones
that do not repeat

Code:
    isAnagram(s, t) {
        let sSorted = s.split("").sort().join("");
        let tSorted = t.split("").sort().join("");
        if (sSorted === tSorted) {
            return true;
        } else {
            return false;
        }
    }
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let hash = new Map();
        for (let i = 0; i < s.length; i++) {
            hash.set(s[i], (hash.get(s[i]) || 0) + 1)
            hash.set(t[i], (hash.get(t[i]) || 0) - 1)
        }
        for (let [key, value] of hash) {
            if (value !== 0) {
                return false
            }
        }
        return true
    }
}

/*
Optimize, categorize:

How could this be more efficient? 
    - Could perhaps find the places that are sorted faster, perhaps when sort it then and there

Pattern:
    - This pattern seems like string manipulation
*/