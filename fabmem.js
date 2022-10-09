function fabMem(index, cache){
    cache = cache || [];
    if(cache[index]) return cache[index];
    else{
        if(index < 3) return 1;
        else{
            cache[index] = fabMem(index - 1, cache) + fabMem(index -2,cache );
        }
    }
    return cache[index];
}



// alternative code
// function fabonacci(position){
//     if(position < 3) return 1;
//     return fabonacci(position - 1) + fabonacci(position -2)
// }