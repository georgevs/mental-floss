var maxProfit = function(prices, fee) {
    
    var cash = 0
    var hold = -prices[0]
    
    for(var i=1; i<prices.length; i++) {
        cash = Math.max(cash, hold+prices[i]-fee)
        hold = Math.max(hold, cash-prices[i])
    }
    return cash
    
};


const { asserteq } = require('../../utils/asserteq');

asserteq(8, maxProfit([1, 3, 2, 8, 4, 9], 2));
asserteq(6, maxProfit([1, 3, 7, 5, 10, 3], 3));
