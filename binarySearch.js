

 
function binarySearch(numArray, key){
    numArray  =  numArray.sort(function(a,b){return a - b});
    let middleIndex = Math.floor(numArray.length / 2);
    let middleElement = numArray[middleIndex];
    if(middleElement === key) return true;
    else if(middleElement < key && numArray.length > 1){
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    }
    else if(middleElement > key && numArray.length > 1){
        return binarySearch(numArray.splice(0,middleIndex),key)
    }
    else return false;
}

console.log(binarySearch([5,7,12,16,36,39,42,56,71], 12));





























