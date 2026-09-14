class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length -1;
        while(i!=j){
            let res = numbers[i]+numbers[j]
            if(res == target) return [i+1, j+1]
            if(res > target) j--
            else i++
        }
    }
}
