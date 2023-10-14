'use strict'

function question() {
    const Like = prompt('Do you like bettas')
        if (Like == 'yes'){
            document.write('Liking bettas is correct');
        } else if (Like == 'no'){
            document.write('You don\'t like bettas, I see you have no taste.');
        } else if (Like == ''){
            prompt('Answer the question.') 
            if (Like == ''){
                prompt('I mean it')
            }
        }
    return Like
}

function sayYes() {
    let text
    confirm('Say ok'); {
        if (confirm('Say ok') == true) {
            text = 'Fish bowls are for cowards.';
        } else {
            text = 'Exercise your fish.';
                }
            }
    document.write(text)
    return text
    }