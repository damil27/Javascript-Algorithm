function factorialFunction(num){
    if(num === 1){
        return num; // basecase
    }
    else{
        return num * factorialFunction(num -1)
    }
}