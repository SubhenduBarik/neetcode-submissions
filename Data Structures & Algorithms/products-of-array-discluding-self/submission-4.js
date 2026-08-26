class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let l = nums.length;
        let p = new Array(l)
        let s = new Array(l)
        p[0] = 1
        s[l - 1] = 1
        for(let i = 1; i < l; i++){
            p[i] = nums[i-1] * p[i-1]
        }

        for(let i = l - 2; i >=0 ; i--){
            s[i] = s[i+1] * nums[i +1]
        }

        let res = new Array(l)
        for(let i = 0; i < l; i++)
            res[i] = p[i] * s[i]
        return res
    }
}
