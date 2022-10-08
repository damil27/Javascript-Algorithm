function twoSum(numArray, sum){
    let pairs = [];
    let hashtable = [];
    for(let i = 0 ; i < numArray.length; i++){
        let currNum = numArray[i];
        let counterpart = sum  - currNum;
        if(hashtable.indexOf(counterpart) !== -1){
            pairs.push([currNum,counterpart])
        }
        hashtable.push(currNum)
    }
    return pairs;
}

console.log(twoSum([1,2,3,5,7,3,8], 10));