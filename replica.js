function replica(){
    let result = {}
    let arg = arguments
    for (let value of Object.values(arg)){
        if(value == undefined || value==null) {
            continue
        }
        for (let entries of Object.entries(value)){
            if(typeof entries[1] == "object" && !Array.isArray(entries[1]) && entries[1] != null && entries[1].constructor != RegExp) {
                if(result[entries[0]] == undefined || (Array.isArray(result[entries[0]]))) {
                    result[entries[0]] = entries[1]
                } else { 
                    result[entries[0]] = replica(result[entries[0]], entries[1])
                }
            } else {
                result[entries[0]] = entries[1]
            }
        }
    }

    return result
}

