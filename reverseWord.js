function reverseWord(string){
    let stringArr = string.split(' ');
    let reversedwordArr= [];
    stringArr.forEach(word =>{
        let reverseWord = " ";
        for(let i = word.length -1; i >=0; i--){
            reverseWord +=word[i];
        }
        reversedwordArr.push(reverseWord);
    })
   return reversedwordArr.join(' ')
}







console.log(reverseWord("simple just simple"));



































// function reverseWord(string){
//     let stringArr = string.split(' ');
//     let reversedwordArr= [];
//     stringArr.forEach(word =>{
//         let reverseWord = " ";
//         for(let i = word.length -1; i >=0; i--){
//             reverseWord +=word[i];
//         }
//         reversedwordArr.push(reverseWord);
//     })
//    return reversedwordArr.join(' ')
// }
