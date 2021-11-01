function forEach(array,fonction){
    return array.reduce(((accumulator, currentValue) =>(fonction(currentValue,accumulator,array),accumulator +=1)),0)
}
