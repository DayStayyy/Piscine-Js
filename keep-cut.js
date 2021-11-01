function cutFirst(string) {
    return(slice2(string,2))
}
function cutLast(string) {
    return(slice2(string,0,-2))
}
function cutFirstLast(string) {
    return(slice2(string,2,-2))
}
function keepFirst(string) {
    return(slice2(string,0,2))
}
function keepLast(string) {
    return(slice2(string,-2))
}
function keepFirstLast(string) {
    if(string.length >4) {
        return(slice2(string,0,2)+slice2(string,-2))
    } else {
        return(string)
    }
    

}

function slice2(array,slicerStart,slicerEnd=array.length){
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

