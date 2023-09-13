// Given 2 strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

//     Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
/*************************************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1
        } else {
            obj[s[i]]++;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]] == undefined || obj[t[i]] == 0) return false;
        else {
            obj[t[i]]--
        }
    }
    return true;
};

console.log(isAnagram("car", "rac"))
console.log(isAnagram("car", "rak"))
console.log(isAnagram("car", "rakseh"))
console.log(isAnagram("Saturday", "yruSaatd"))
console.log(isAnagram("Saturday", "yrusaatd"))