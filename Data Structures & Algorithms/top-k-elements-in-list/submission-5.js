class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map()
        for(let n of nums){
            freq.set(n, (freq.get(n) || 0) +1)
        }
        let res = new Array(k)
        
        for(let i = 0; i < k; i++){
            let max = -Infinity
            for(let [n, f] of freq.entries()){
                if(f > max) {
                    res[i] = n
                    max = f
                }
            }
            freq.delete(res[i])
        }
        return res
    }
}
