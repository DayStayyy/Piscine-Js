function reverse(array){
    let result = []
    for(let i = array.length - 1;i>=0;i--){
        result.push(array[i])
    }
    if(typeof array == "string"){
        return result.join("")
    }
    return result
}
