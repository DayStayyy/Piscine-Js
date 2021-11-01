function fold(array,fonction,accumulator = 0) { 
    for(let i=0;i<array.length;i++){
        accumulator = fonction(accumulator,array[i])
    }
    return accumulator
}

function foldRight(array,fonction,accumulator = 0) { 
    for(let i=array.length-1;i>=0;i--){
        accumulator = fonction(accumulator,array[i])
    }
    return accumulator
}
function reduce(array,fonction) { 
    if (array.length < 1) {
        return null
    }
    let accumulator = array[0]
    for(let i=1;i<array.length;i++){
        accumulator = fonction(accumulator,array[i])
    }
    return accumulator
}

function reduceRight(array,fonction) { 
    if (array.length < 1) {
        return null
    }
    let accumulator = array[array.length-1]
    for(let i=array.length-2;i>=0;i--){
        accumulator = fonction(accumulator,array[i])
    }
    return accumulator
}