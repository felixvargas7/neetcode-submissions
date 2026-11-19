class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counts = {}
        for i in range(len(nums)):
            if nums[i] not in counts:
                counts[nums[i]] = 0
            counts[nums[i]] += 1
        for num, count in counts.items():
            if count > 1:
                return True
        return False
    