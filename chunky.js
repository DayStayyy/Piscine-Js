function chunk(string,separator) {
    let result = []
    for(let i = 0;i<string.length;i++){
        if((i+1)/(result.length+1) == separator){
            result.push(string.slice(i-separator+1,i+1))
        } else if(i == string.length-1) {
            if(string.length%separator != 0) {
                console.log("yo")
                result.push(string.slice(i-string.length%separator+1,i+1))
            } else {
                result.push(string.slice(i-separator+1,i))
            }
        }
    }
    return result
}
