class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        // Count frequency
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Bucket array
        const bucket = Array(nums.length + 1)
            .fill()
            .map(() => []);

        // Place numbers into bucket
        for (const [num, count] of freqMap) {
            bucket[count].push(num);
        }

        // Collect answer
        const result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {

            for (const num of bucket[i]) {

                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        
    }
}
