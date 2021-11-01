let maj = false

export function compose(key) {
    if(key != undefined) {
        let letter = String.fromCharCode(key.keyCode).toLowerCase()
        if (letter.match(/[a-z]/)){
            let note = document.createElement("div")
            note.classList.add("note")
            note.textContent += letter
            note.style.backgroundColor = `rgba(${key.keyCode},${key.keyCode},${key.keyCode})`
            document.body.appendChild(note)
            

        } else if (key.keyCode == 8){
            let allNote = document.getElementsByClassName("note")
            allNote[allNote.length-1].remove()
        } else if (key.keyCode == 27) {
            let allNote = Array.from(document.getElementsByClassName("note"))
            allNote.forEach(element => {
                element.remove()
            });
        }
    }
    
    
}

document.addEventListener('keydown', compose)
