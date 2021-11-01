function triangle(string,nb) {
    let result = ""
    for(let i=1;i<=nb;i++) {
        for(let j=1;j<=i;j++){
            result+= string
        }
        if (i<nb) {
            result += "\n"
        }    
    }
    return result
}
