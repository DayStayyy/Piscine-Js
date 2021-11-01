function RNA(DNA) {
    let result = ""
    for(let i=0;i<DNA.length;i++){
        if(DNA[i]=="G") {
            result += "C"
        } else if(DNA[i]=="C") {
            result += "G"
        } else if(DNA[i]=="T") {
            result += "A"
        } else if(DNA[i]=="A") {
            result += "U"
        }
    }
    return result
}

function DNA(RNA) {
    let result = ""
    for(let i=0;i<RNA.length;i++){
        if(RNA[i]=="C") {
            result += "G"
        } else if(RNA[i]=="G") {
            result += "C"
        } else if(RNA[i]=="A") {
            result += "T"
        } else if(RNA[i]=="U") {
            result += "A"
        }
    }
    return result
}


