function isPalindrome(string){
    string = string.toLowerCase();
    string =  string.split("");
    let validChar = 'qwertyuiopasdfghjklzxcvbnm';

    let validLetter = []
    string.forEach(letter =>{
        if(validChar.indexOf(letter) > -1) validLetter.push(letter);
    })
    if(validLetter.join('') === validLetter.reverse().join('')) return true;
    else return false;
}