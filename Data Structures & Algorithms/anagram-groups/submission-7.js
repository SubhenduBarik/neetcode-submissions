class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = {}
        const getSortedAnagram = (ana) => {
            let ls = new Array(26).fill("")
            for(let n of ana){
                let i = n.charCodeAt(0) - 97
                ls[i]+=n
            }
            return ls.reduce((acc, cur) => acc += cur,'')
        }

        for(let s of strs){
            let sortedAna = getSortedAnagram(s)
            if(!seen[sortedAna]) seen[sortedAna] = [s]
            else seen[sortedAna].push(s)
        }
        return Object.values(seen)
    }
}
