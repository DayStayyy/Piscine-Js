function pick(obj,keys) {

    let result = {}
    if(Array.isArray(keys)) {
        keys.forEach(key => {
            if(obj[key] != undefined) {
            result[key] = obj[key]
            }
        })
    } else if(typeof keys == "object"){
        for (let key of Object.keys(obj)) {
            if(obj[key] != undefined) {
                result[key] = obj[key]
            }
        }
    } else {
        if(obj[keys] != undefined) {
            result[keys] = obj[keys]
        }
    }
    return result

}

function omit(obj,keys) {
    let result = {}
    for (let value of Object.entries(obj)) {
        if(Array.isArray(keys)) {
            if(keys.indexOf(value[0]) == -1) {
                result[value[0]] = value[1] 
            }
        } else if(typeof keys == "object"){
            if(!value[0] in keys) {
                result[value[0]] = value[1] 
            }
        } else {
            if(value[0] != keys) {
                result[value[0]] = value[1] 
            }
        }
    }
    return result
}