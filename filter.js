function filter(array,fonction) {
    let result = []
    for(let i=0;i<array.length;i++){
        if(fonction(array[i],i,array) == true){
            result.push(array[i])
        }
    }
    return result
}
function reject(array,fonction) {
    let result = []
    for(let i=0;i<array.length;i++){
        if(fonction(array[i],i,array) != true){
            result.push(array[i])
        }
    }
    return result
}
function partition(array,fonction) {
    let result = [[],[]]
    for(let i=0;i<array.length;i++){
        if(fonction(array[i],i,array) == true){
            result[0].push(array[i])
        } else {
            result[1].push(array[i]) 
        }
    }
    return result
}