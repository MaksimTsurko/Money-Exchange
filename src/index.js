// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   
   if (currency > 10000) {
       return {error: "You are rich, my friend! We don't have so much coins for exchange"}
   }
    var coins = {
   "H":50,
   "Q":25,
   "D":10,
   "N":5,
   "P":1
   };
   
    var c = currency;
    var result = {};
    
    for (var key in coins){
        if (c>=coins[key]){
            var amount = Math.floor(c/coins[key]);
            result[key] = amount;
            c-=amount*coins[key];
        }
    }
    return result;
}
