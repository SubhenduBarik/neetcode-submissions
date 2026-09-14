class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i = 0; i < numbers.length; i++){
            let t = target - numbers[i]
            let j = i+1;
            while(j < numbers.length && numbers[j] <= t){
                if(t == numbers[j]){
                    return [i+1, j+1]
                }
                j+=1
            }
            while(numbers[i] == numbers[i+1]) i+=1
        }
    }
}
