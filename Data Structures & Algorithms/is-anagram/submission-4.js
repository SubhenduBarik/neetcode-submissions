class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let ana = new Array(26).fill(0)
        for(let i = 0; i < s.length; i++){
            ana[s[i].charCodeAt(0) - 97]+=1
            ana[t[i].charCodeAt(0) - 97]-=1
        }
        return ana.every(x => x == 0)
    }
}
