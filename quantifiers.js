function every(array,fonction){
    for(let i=0;i<array.length;i++){
        if(!fonction(array[i])){
            return false
        }
    }
    return true
}

function some(array,fonction){
    for(let i=0;i<array.length;i++){
        if(fonction(array[i])){
            return true
        }
    }
    return false
}

function none(array,fonction){
    for(let i=0;i<array.length;i++){
        if(fonction(array[i])){
            return false
        }
    }
    return true
}