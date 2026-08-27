class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let nset = new Set(nums)
        let max = 0;
        for(let n of nset){
            let cur = 1
            while(nset.has(n-1))n-=1
            nset.delete(n)
            while(nset.has(n+1)){
                cur += 1
                nset.delete(n+1)
                n+=1
            }
            max = Math.max(max, cur)
        }
        return max
    }
}
