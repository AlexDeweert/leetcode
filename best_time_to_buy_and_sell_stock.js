/*This was the brute force approach which is O(n^2). The optimal approach can be done in one 
pass O(n) but I didn't think of that solution until I looked at the leetcode way to do it*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //Have to buy first
    //Can only sell items AFTER the buy index
    
    //Naive: for each item, check what the profit would be if it was bought, then sold for all items on later days
    //then, from each index pair, choose the max profit
    
    let maxProfit = Number.MIN_SAFE_INTEGER
    
    for( let i = 0; i < prices.length; i++ ) {
        for( let j = i+1; j < prices.length; j++ ) {
            let buy = prices[i]
            let sell = prices[j]
            let profit = sell - buy
            if( profit > maxProfit ) maxProfit = profit
        }
    }
    
    if( maxProfit < 0 ) return 0
    return maxProfit
};
