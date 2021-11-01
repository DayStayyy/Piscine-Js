function pyramid(string,nb) {
    let result = ""
    for(let i=0;i<nb;i++) {
        for(let j=1;j<=nb-1;j++) {
            if(j<nb-i){
                result+=" ".repeat(string.length)
            } else {
                result+=string
            }
        }
        result += string
        for(let j=nb;j>=1;j--) {
            if(j>nb-i){
                result+=string
            }
        }
        if (i<nb-1) {
            result += "\n"
        }    
    }
    return result
}
