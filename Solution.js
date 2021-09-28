
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


    if (s.length === 0) {
        return 0;
    }

    let left = 0;
    let right = 0;
    let n = s.length;
    const frequency = [];
    initializeFrequency(frequency);
    let maxSubstringWithUniqueCharacters = 0;

    while (right < n) {

        while (right < n && frequency[s.codePointAt(right)] === 0) {
            frequency[s.codePointAt(right++)]++;
        }

        maxSubstringWithUniqueCharacters = Math.max(maxSubstringWithUniqueCharacters, right - left);
        if (right === n) {
            break;
        }

        while (s.codePointAt(left) !== s.codePointAt(right)) {
            frequency[s.codePointAt(left++)]--;
        }

        left++;
        right++;
    }
    return maxSubstringWithUniqueCharacters;
};

function initializeFrequency(frequency) {
    for (let i = 0; i < 127; i++) {
        frequency[i] = 0;
    }
}
