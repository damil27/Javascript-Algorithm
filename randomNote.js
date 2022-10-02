function harmlessRasomeNote(noteText,magazineText){
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {}; 

    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0; // word as properties in an object
        magazineObj[word]++ 
    });


    let noteIsposible = true;
    noteArr.forEach(word =>{
        if(magazineObj[word]){ // if current word exist in magazineword
            magazineObj[word]--; // then decreament the value
            if(magazineObj[word] < 0 ) noteIsposible = false;
        }
        else noteIsposible = false;
    })
    
    return noteIsposible;
}


harmlessRasomeNote('', 'testing algorithm function function')



