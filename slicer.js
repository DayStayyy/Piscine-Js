function slice(array,slicerStart,slicerEnd=array.length){
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
        return result.join("")
    }
    return result
}
 
