function split(string,splitter){
    let result = []
    let born = 0
    for(let i = 0;i<string.length;i++){
        if(slice4(string,i,i+splitter.length) == splitter) {
            result.push(slice4(string,born,i))
            born = i+splitter.length
        }
    }
    result.push(slice4(string,born))
    return result
}

function join(array,joiner){
    let result = ""
    for(let i=0;i<array.length;i++){
        if(i == array.length-1) {
            result += array[i]
        } else {
            result += array[i] + joiner
        }
    }
    return result
}




function slice4(array,slicerStart,slicerEnd=array.length){
    let result = []
    if (slicerStart < 0) {
        slicerStart = array.length + slicerStart
    }
    if (slicerEnd < 0) {
        slicerEnd = array.length + slicerEnd
    }
    for(;slicerStart<slicerEnd;slicerStart++){
        result.push(array[slicerStart])
    }
    
    if(typeof array == "string"){
        return join(result,"")
    }
    return result
}
