class Solution {
    /**
     * @param {number[]} nums
     * @param {number} start
     * @return {number[][]}
     */
    twoSum(nums, start, target){
        let seen = {}
        let result = []
        let seenSet = new Set()
        for(let i = start; i < nums.length; i++){
            if(seen[nums[i]] != null) {
                let res = [seen[nums[i]], nums[i]]
                let key = res.join("_")
                if(!seenSet.has(key)){
                    result.push(res)
                    seenSet.add(key)
                }
            }
            else seen[target - nums[i]] = nums[i]
        }
        return result
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        nums = nums.sort()
        for(let i = 0; i < nums.length-1; i++){
            let res = this.twoSum(nums, i+1, 0-nums[i])
            if(res.length){
                for(let x of res)
                result.push([nums[i], ...x])
            }
            while(nums[i] == nums[i+1]) i+=1
        }
        return result
    }
}
