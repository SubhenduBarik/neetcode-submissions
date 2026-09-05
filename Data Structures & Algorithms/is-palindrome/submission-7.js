class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            while (/[A-Za-z0-9]/.test(s[i]) == false && i < j) i++;
            while (/[A-Za-z0-9]/.test(s[j]) == false && i < j) j--;
            if (s[i].toLowerCase() != s[j].toLowerCase()) return false
            i++;
            j--;
        }
        return true
    }
}
