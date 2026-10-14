class Solution {
    public int lengthOfLongestSubstring(String s) {
      Set<Character> window = new HashSet<>();
        int left = 0;
        int longest = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            while (window.contains(c)) {
                window.remove(s.charAt(left));   // shrink until c is gone
                left++;
            }
            window.add(c);
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
