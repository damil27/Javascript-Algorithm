function caesarCipher (str,num){
    let lowerCaseString = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    let newString = ""; // we create new string from lowercase iterationg string
    for(let i = 0; i<lowerCaseString.length; i++){
        num = num % 26;
        currentLetter =  lowerCaseString[i] // currentletter as at postiong i 
        // if current is a space we want to add it to a  new string 
        if(currentLetter === ' '){
            newString += currentLetter;
            continue; // skip other functionality on the loop and move to the next loop
        }
       
        let currentIndex = alphabet.indexOf(currentLetter) ; // determing where our current letter is inside our alphabelt
        let newIndex = currentIndex + num; // where we want the new index  to be.
        if(newIndex  > 26) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = 26 + newIndex;
        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
        }
        else newString  += alphabet[newIndex]
    }
    return newString;
} 

console.log(caesarCipher("zoo keeper", 2));