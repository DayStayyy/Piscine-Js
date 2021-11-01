function get(src,path) {
    let key = src
    let array = path.split(".")
    for(let i=0;i<array.length;i++) {
        key = key[array[i]]
        if(key == undefined) {
            return undefined
        }
    }
    return key
}
