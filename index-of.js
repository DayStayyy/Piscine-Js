function indexOf(array,arg,fromIndex = 0){
    for(let i=fromIndex;i<array.length;i++){
        if(array[i] == arg) {
            return i
        }
    }
    return -1
}

function lastIndexOf(array,arg,fromIndex = 0){
    let index = -1
    for(let i=fromIndex;i<array.length;i++){
        if(array[i] == arg) {
            index = i
        }
    }
    if(fromIndex != array.length-1) {
        for(let i=fromIndex-1;i>=0;i--){
            if(array[i] == arg) {
                index = i
            }
        }
    }
    return index
}

function includes (array,arg){
    for(let i=0;i<array.length;i++){
        if(array[i] == arg) {
            return true
        }
    }
    return false
}
