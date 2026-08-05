class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const result = new Array(length);
        
        // Pass 1: Calculate the prefix products
        let prefix = 1;
        for (let i = 0; i < length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        
        // Pass 2: Calculate the suffix products on the fly and combine
        let suffix = 1;
        for (let i = length - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        
        return result;
    }
}
