function filterShortStateName(array){
    return array.filter(word => word.length < 7)
}

function filterStartVowel(array){
    return array.filter(word => word[0].match(/[aeiouAEIOU]/))
}

function filter5Vowels(array){
    return array.filter(word =>(word.match(/[aeiouAEIOU]/g)||[]).length > 4)
}

function filter1DistinctVowel(array) {
    return array.filter(word =>{
        let boolean= false
        if((word.match(/[aA]/g)||[]).length > 0) {
            boolean = true
        }
        if((word.match(/[eE]/g)||[]).length > 0) {
            if(boolean!= true) {
                boolean = true
            } else {
                return null
            }
            
        }
        if((word.match(/[iI]/g)||[]).length > 0) {
            if(boolean!= true) {
                boolean = true
            } else {
                return null
            }
            
        }
        if((word.match(/[oO]/g)||[]).length > 0) {
            if(boolean!= true) {
                boolean = true
            } else {
                return null
            }
            
        }
        if((word.match(/[uU]/g)||[]).length > 0) {
            if(boolean!= true) {
                boolean = true
            } else {
                return null
            }
            
        }
        return word
    })
}

function multiFilter(array) {
    return array.filter(object =>(object.capital.length > 7 && !object.name[0].match(/[aeiouAEIOU]/) && object.tag.match(/[aeiouAEIOU]/g)||[]).length > 0 && object.region != "South")
}