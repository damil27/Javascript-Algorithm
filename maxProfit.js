function maxStockProfit(priceArray){
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let changeBuyPrice = true;
        for(let i = 0; i < priceArray.length; i++){
            if(changeBuyPrice) buyPrice = priceArray[i];
            sellPrice = priceArray[i + 1]

            if(sellPrice < buyPrice){
                changeBuyPrice =  true;
            }else{
                let temp = sellPrice - buyPrice;
                if(temp > maxPrice) maxProfit = temp;
                changeBuyPrice = false;
            }
    }
    return maxProfit;
}