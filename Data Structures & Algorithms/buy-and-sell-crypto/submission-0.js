class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        // Found a cheaper day to buy
        if (prices[i] < buyPrice) {
            buyPrice = prices[i];
        }

        // What if we sell today?
        const profit = prices[i] - buyPrice;

        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}
}
