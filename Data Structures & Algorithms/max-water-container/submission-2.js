class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1
        let m = - Infinity
        while(i<j){
            let minH = Math.min(heights[i], heights[j])
            let a = (j - i) * minH
            m = Math.max(m, a)
            if(heights[i] <= heights[j]) i++
            else j--
        }
        return m
    }
}
