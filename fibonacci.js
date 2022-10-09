function fabonacci(position){
    if(position < 3) return 1;
    else return fabonacci(position  - 1 ) + fabonacci(position - 2);
}
console.log(fabonacci(12))