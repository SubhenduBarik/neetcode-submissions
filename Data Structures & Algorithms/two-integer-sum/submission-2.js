class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {}
        for(let i = 0; i <nums.length; i++){
            let n = nums[i]
            if(seen[n] != null) return [seen[n], i]
            seen[target - n] = i
        }
    }
}
