
public class Solution {

    public int lengthOfLongestSubstring(String s) {

        if (s.isEmpty()) {
            return 0;
        }

        int left = 0;
        int right = 0;
        int n = s.length();
        int[] frequency = new int[127];
        int maxSubstringWithUniqueCharacters = 0;

        while (right < n) {

            while (right < n && frequency[s.codePointAt(right)] == 0) {
                frequency[s.codePointAt(right++)]++;
            }

            maxSubstringWithUniqueCharacters = Math.max(maxSubstringWithUniqueCharacters, right - left);
            if (right == n) {
                break;
            }

            while (s.codePointAt(left) != s.codePointAt(right)) {
                frequency[s.codePointAt(left++)]--;
            }

            left++;
            right++;
        }
        return maxSubstringWithUniqueCharacters;
    }
}
