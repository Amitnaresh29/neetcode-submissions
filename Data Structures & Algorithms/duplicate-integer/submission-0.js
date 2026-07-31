class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasMap = new Map();
        for(let i =0 ;i < nums.length; i++){
            if(hasMap.has(nums[i])){
                return true;
            }
            hasMap.set(nums[i],true);
        }
        return false
    }
}
