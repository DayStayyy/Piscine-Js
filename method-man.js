
function words(word){
    return word.split(" ")
}

function sentence(array){
    return array.join(" ")
}

function yell(word) {
    return word.toUpperCase()
}

function whisper(word) {
    return "*"+word.toLowerCase()+"*"
}

function capitalize(word) {
    let endWord = "";
    if(word.length > 1){
        for(var i= 1; i < word.length; i++)
        {
            endWord += word[i]
        }
    }
    return yell(word[0])+endWord.toLowerCase()
}


console.log(capitalize("gFEZSfdsfFS"))