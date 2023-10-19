'use strict'

let guessAttempts = true

function question() {
   
    while (guessAttempts){
       
       let Like = prompt('Do you like bettas?');
       let result = Like.toLowerCase();
        guessAttempts -= 1;
        if (result == 'yes'){
            document.write('Liking bettas is correct');
            guessAttempts = false;
            break;
        } else if (result == 'no'){
            document.write('You don\'t like bettas, I see you have no taste.');
            guessAttempts = false;
            break;
        } 
        else {
            alert('Answer the question.')
            guessAttempts = true;
        } 
    }
    
}

function sayYes() {
    let text
        if (confirm('Say ok') == true) {
            text = 'Fish bowls are for cowards.';
        } else {
            text = 'Exercise your fish.';
                }
    document.write(text)
    return text
    }

function bettaNumber() {
    let number = prompt('How many bettas do you want to see?');

    console.log(number)

    for (let i = 0; i < number; i++) {
        document.write("<img id=loop src='tep-dara-XzuefN2rSnQ-unsplash.jpg' alt='betta fish floating in a tank' />");
    }
}
