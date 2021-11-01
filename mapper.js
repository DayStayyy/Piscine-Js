function map(array,fonction) {
    let result = []
    for(let i=0;i<array.length;i++){
        result.push(fonction(array[i],i,array))
    }
    return result
}

function flatMap(array,fonction) {
    let result = []
    for(let i=0;i<array.length;i++){
        result.push(fonction(array[i],i,array))
    }
    return flat(result)
}

function flat(array,nb=1) {
    let result = []
    let recursiv = false
    if(nb==0){
        return array
    }
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            for(let y=0;y<array[i].length;y++){
                 result.push(array[i][y])
            }
            recursiv = true 
        } else{
            result.push(array[i])
        }
    }
    if(recursiv){
        return flat(result,nb-1)
    }
    return result
}