const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export function generateLetters() {
    for(let i = 0; i <120;i++){
        let letter = document.createElement("div")

        letter.style.fontSize =(i+11).toString()+'px'

        let text = document.createTextNode(alphabet[getRandomInt(26)])

        letter.appendChild(text)
        if (i < 40){
            letter.style.fontWeight = 300
        } else if(i >= 40 && i <80){
            letter.style.fontWeight = 400
        } else {
            letter.style.fontWeight = 600
        }
        document.body.appendChild(letter)
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}