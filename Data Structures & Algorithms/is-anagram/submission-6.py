class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        counts = {}
        if len(s) != len(t):
            return False
        for i in range(len(s)):
            if s[i] not in counts:
                counts[s[i]] = 0
            counts[s[i]] += 1
        for i in range(len(t)):
            if t[i] in counts:
                counts[t[i]] -= 1
        for letter, count in counts.items():
            if count > 0:
                return False
            if count < 0:
                return False
        return True
    